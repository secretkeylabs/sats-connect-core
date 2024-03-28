import { Buffer } from 'buffer';
import {
  GetAccountsParams,
  Params,
  Requests,
  Return,
  SendTransferParams,
  SignMessageParams,
  SignPsbtParams,
} from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { RpcErrorCode, RpcResult } from '../types';
import { AddressType, getAddressInfo } from 'bitcoin-address-validation';
import { Address, AddressPurpose } from '../addresses';
import { DefaultAdaptersInfo } from '.';

type InputType = {
  index: number;
  address?: string;
  publicKey?: string;
  sighashTypes?: number[];
  disableTweakSigner?: boolean;
}[];

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
      toSignInputs: InputType;
    }
  ) => Promise<string>;
  pushPsbt: (psbtHex: string) => Promise<string>;
};

declare global {
  interface Window {
    unisat: Unisat;
  }
}

function convertSignInputsToInputType(
  signInputs: Record<string, number[]>,
  allowedSignHash?: number
): InputType {
  let result: InputType = [];
  for (let address in signInputs) {
    let indexes = signInputs[address];
    for (let index of indexes) {
      result.push({
        index: index,
        address: address,
        sighashTypes: allowedSignHash ? [allowedSignHash] : undefined,
      });
    }
  }
  return result;
}

class UnisatAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.unisat.id;

  private async getAccounts(params: GetAccountsParams): Promise<Return<'getAccounts'>> {
    const { purposes } = params;
    if (!purposes.includes(AddressPurpose.Stacks)) {
      throw new Error('Only bitcoin addresses are supported');
    }
    const [accounts, publicKey] = await Promise.all([
      window.unisat.requestAccounts(),
      window.unisat.getPublicKey(),
    ]);
    const address = accounts[0];
    const addressType = getAddressInfo(accounts[0]).type;
    const paymentAddress: Address = {
      address,
      publicKey,
      addressType,
      purpose: AddressPurpose.Payment,
    };
    const ordinalsAddress: Address = {
      address,
      publicKey,
      addressType,
      purpose: AddressPurpose.Ordinals,
    };
    const response: Return<'getAccounts'> = [];
    if (purposes.includes(AddressPurpose.Payment)) {
      response.push(paymentAddress);
    }
    if (purposes.includes(AddressPurpose.Ordinals)) {
      response.push(ordinalsAddress);
    }
    return response;
  }

  private async signMessage(params: SignMessageParams): Promise<Return<'signMessage'>> {
    const { message, address } = params;
    const addressType = getAddressInfo(address).type;
    const Bip322supportedTypes = [AddressType.p2wpkh, AddressType.p2tr];
    if (Bip322supportedTypes.includes(addressType)) {
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
    const psbtHex = Buffer.from(psbt, 'base64').toString('hex');
    const signedPsbt = await window.unisat.signPsbt(psbtHex, {
      autoFinalized: broadcast,
      toSignInputs: convertSignInputsToInputType(signInputs, allowedSignHash),
    });
    if (broadcast) {
      const txid = await window.unisat.pushPsbt(psbtHex);
      return {
        psbt: signedPsbt,
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
          const response: Return<'getAccounts'> = await this.getAccounts(
            params as GetAccountsParams
          );
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
          const error = {
            code: RpcErrorCode.METHOD_NOT_SUPPORTED,
            message: 'Method not supported by the selected wallet',
          };
          console.error('Error calling the method', error);
          return {
            status: 'error',
            error,
          };
        }
      }
    } catch (error) {
      console.error('Error calling the method', error);
      return {
        status: 'error',
        error: {
          code: error.code === 4001 ? RpcErrorCode.USER_REJECTION : RpcErrorCode.INTERNAL_ERROR,
          message: error.message ? error.message : 'Wallet method call error',
          data: error,
        },
      };
    }
  };
}

export { UnisatAdapter };
