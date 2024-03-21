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
import { getAddressInfo } from 'bitcoin-address-validation';

type Unisat = {
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  signMessage: (message: string, type?: string) => Promise<string>;
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
};

declare global {
  interface Window {
    unisat: Unisat;
  }
}

class UnisatAdapter extends SatsConnectAdapter {
  id = 'unisat';
  name = 'Unisat';
  url = 'https://unisat.io/';

  supportedMethods: (keyof StxRequests | keyof BtcRequests)[] = [
    'getAccounts',
    'sendTransfer',
    'signMessage',
    'signPsbt',
  ];

  async isInstalled() {
    this.installed = typeof window.unisat !== 'undefined';

    return this.installed;
  }

  private async getAccounts(): Promise<Return<'getAccounts'>> {
    const [accounts, publickKey] = await Promise.all([
      window.unisat.requestAccounts(),
      window.unisat.getPublicKey(),
    ]);
    // to-do: create a generic purpose type for the response
    const response: Return<'getAccounts'> = accounts.map((address) => ({
      address,
      publicKey: publickKey,
      addressType: getAddressInfo(address).type,
    }));
    return response;
  }

  private async signMessage(params: SignMessageParams): Promise<Return<'signMessage'>> {
    const { message, address } = params;
    // to-do handle the type optional parameter
    const response = await window.unisat.signMessage(message);
    return {
      address,
      // to-do: messageHash generation sats-connect responsibility?
      messageHash: '',
      signature: response,
    };
  }

  private async sendTransfer(params: SendTransferParams): Promise<Return<'sendTransfer'>> {
    const { recipients } = params;
    const response = await Promise.all(
      recipients.map((recipient) => window.unisat.sendBitcoin(recipient.address, recipient.amount))
    );
    // to-do: handling multiple recipients
    // xverse creates one transaction for all recipients, unisat creates one transaction for each recipient
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
        /**
         * to-do: get the public key from the address
         */
        // disableTweakSigner: true,
        // publicKey: '',
      })),
    });
    return {
      psbt: psbtHex,
    };
  }

  request = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    if (!this.installed) {
      console.error('Unisat is not installed');
    }
    if (!(method in this.supportedMethods)) {
      console.error('Method not supported by the selected wallet');
    }
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
