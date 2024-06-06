import { Buffer } from 'buffer';
import { Params, Requests, Return } from '../request';
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

  private async getAccounts(params: Params<'getAccounts'>): Promise<Return<'getAccounts'>> {
    const { purposes } = params;
    if (purposes.includes(AddressPurpose.Stacks)) {
      throw new Error('Only bitcoin addresses are supported');
    }
    const accounts = await window.unisat.requestAccounts();
    const publicKey = await window.unisat.getPublicKey();
    const address = accounts[0];
    const addressType = getAddressInfo(accounts[0]).type;
    const pk = addressType === AddressType.p2tr ? publicKey.slice(2) : publicKey;
    const paymentAddress: Address = {
      address,
      publicKey: pk,
      addressType,
      purpose: AddressPurpose.Payment,
    };
    const ordinalsAddress: Address = {
      address,
      publicKey: pk,
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

  private async signMessage(params: Params<'signMessage'>): Promise<Return<'signMessage'>> {
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

  private async sendTransfer(params: Params<'sendTransfer'>): Promise<Return<'sendTransfer'>> {
    const { recipients } = params;
    if (recipients.length > 1) {
      throw new Error('Only one recipient is supported by this wallet provider');
    }
    const txid = await window.unisat.sendBitcoin(recipients[0].address, recipients[0].amount);

    return {
      txid,
    };
  }

  private async signPsbt(params: Params<'signPsbt'>): Promise<Return<'signPsbt'>> {
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

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method>> => {
    try {
      switch (method) {
        case 'getAccounts': {
          const response: Return<'getAccounts'> = await this.getAccounts(
            params as Params<'getAccounts'>
          );
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        case 'sendTransfer': {
          const response = await this.sendTransfer(params as Params<'sendTransfer'>);
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        case 'signMessage': {
          const response = await this.signMessage(params as Params<'signMessage'>);
          return {
            status: 'success',
            result: response as Return<Method>,
          };
        }
        case 'signPsbt': {
          const response = await this.signPsbt(params as Params<'signPsbt'>);
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
