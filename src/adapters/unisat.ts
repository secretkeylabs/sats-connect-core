import {
  BtcRequests,
  Params,
  Requests,
  Return,
  SendTransferParams,
  SignMessageParams,
  SignPsbtParams,
  StxRequests,
} from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { RpcErrorCode, RpcResult } from '../types';
import { AddressType, getAddressInfo } from 'bitcoin-address-validation';

type Unisat = {
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  signMessage: (message: string, type?: 'ecdsa' | 'bip322-simple') => Promise<string>;
  getPublicKey: () => Promise<string>;
  sendBitcoin: (
    address: string,
    atomicAmount: number,
    options?: { feeRate: number }
  ) => Promise<string>;
  signPsbt: (
    psbtHex: string,
    options?: {
      autoFinalized?: boolean;
      toSignInputs: {
        index: number;
        address?: string;
        publicKey?: string;
        sighashTypes?: number[];
        disableTweakSigner?: boolean;
      }[];
    }
  ) => Promise<string>;
  pushPsbt: (psbtHex: string) => Promise<string>;
};

declare global {
  interface Window {
    unisat: Unisat;
  }
}

class UnisatAdapter extends SatsConnectAdapter {
  id = 'unisat';

  private async getAccounts(): Promise<Return<'getAccounts'>> {
    const [accounts, publickKey] = await Promise.all([
      window.unisat.requestAccounts(),
      window.unisat.getPublicKey(),
    ]);
    const response: Return<'getAccounts'> = accounts.map((address) => ({
      address,
      publicKey: publickKey,
      addressType: getAddressInfo(address).type,
    }));
    return response;
  }

  private async signMessage(params: SignMessageParams): Promise<Return<'signMessage'>> {
    const { message, address } = params;
    const addressType = getAddressInfo(address).type;
    if (addressType === AddressType.p2tr) {
      const response = await window.unisat.signMessage(message, 'bip322-simple');
      return {
        address,
        messageHash: '',
        signature: response,
      };
    }
    const response = await window.unisat.signMessage(message, 'ecdsa');
    return {
      address,
      messageHash: '',
      signature: response,
    };
  }

  private async sendTransfer(params: SendTransferParams): Promise<Return<'sendTransfer'>> {
    const { recipients } = params;
    const response = await Promise.all(
      recipients.map((recipient) => window.unisat.sendBitcoin(recipient.address, recipient.amount))
    );
    return {
      txid: response[0],
    };
  }

  private async signPsbt(params: SignPsbtParams): Promise<Return<'signPsbt'>> {
    const { psbt, signInputs, allowedSignHash, broadcast } = params;
    // to-do: convert psbt from base64 to hex
    const psbtHex = await window.unisat.signPsbt(psbt, {
      autoFinalized: broadcast,
      toSignInputs: Object.entries(signInputs).map(([address, indexes]) => ({
        address,
        index: indexes[0],
        sighashTypes: allowedSignHash ? [allowedSignHash] : undefined,
      })),
    });
    if (broadcast) {
      const txid = await window.unisat.pushPsbt(psbtHex);
      return {
        psbt: psbtHex,
        txid,
      };
    }
    return {
      psbt: psbtHex,
    };
  }

  request = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    try {
      switch (method) {
        case 'getAccounts': {
          const response: Return<'getAccounts'> = await this.getAccounts();
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        case 'sendTransfer': {
          const response = await this.sendTransfer(params as SendTransferParams);
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        case 'signMessage': {
          const response = await this.signMessage(params as SignMessageParams);
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        case 'signPsbt': {
          const response = await this.signPsbt(params as SignPsbtParams);
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        default: {
          return {
            status: 'error',
            error: {
              code: RpcErrorCode.METHOD_NOT_SUPPORTED,
              message: 'Method not supported by the selected wallet',
            },
          };
        }
      }
    } catch (error) {
      console.error('Error calling the method', error);
      return {
        status: 'error',
        error: {
          code: RpcErrorCode.INTERNAL_ERROR,
          message: 'Wallet Error processing the request',
          data: error,
        },
      };
    }
  };
}

export { UnisatAdapter };
