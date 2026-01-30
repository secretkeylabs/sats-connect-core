import { AddressType, getAddressInfo } from 'bitcoin-address-validation';
import { Buffer } from 'buffer';
import type { RequestReturn } from 'src';
import type { AddListener, NetworkChangeEvent } from 'src/provider/types';
import type { Method } from 'src/request/methods';
import { MessageSigningProtocols } from 'src/request/rpc/objects/namespaces/bitcoin/shared';
import type { RpcRequestParams } from 'src/request/rpc/requests';
import type { RpcSuccessResponseResult } from 'src/request/rpc/responses';
import { DefaultAdaptersInfo } from '.';
import type { Address } from '../addresses';
import { AddressPurpose } from '../addresses';
import { RpcErrorCode } from '../types';
import { SatsConnectAdapter } from './satsConnectAdapter';

type InputType = {
  index: number;
  address?: string;
  publicKey?: string;
  sighashTypes?: number[];
  disableTweakSigner?: boolean;
}[];

type UnisatEvent = 'accountsChanged' | 'networkChanged';

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
  on: (event: UnisatEvent, handler: () => void) => void;
  removeListener: (event: UnisatEvent, handler: () => void) => void;
};

declare global {
  interface Window {
    unisat: Unisat;
  }
}

function convertSignInputsToInputType(signInputs?: Record<string, number[]>): InputType {
  const result: InputType = [];
  if (!signInputs) {
    return result;
  }
  for (const address in signInputs) {
    const indexes = signInputs[address];
    for (const index of indexes) {
      result.push({
        index: index,
        address: address,
      });
    }
  }
  return result;
}

class UnisatAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.unisat.id;

  private async getAccounts(
    params: RpcRequestParams<'getAccounts'>
  ): Promise<RpcSuccessResponseResult<'getAccounts'>> {
    const { purposes } = params;
    if (
      purposes.includes(AddressPurpose.Stacks) ||
      purposes.includes(AddressPurpose.Starknet) ||
      purposes.includes(AddressPurpose.Spark)
    ) {
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
      walletType: 'software',
    };
    const ordinalsAddress: Address = {
      address,
      publicKey: pk,
      addressType,
      purpose: AddressPurpose.Ordinals,
      walletType: 'software',
    };
    const response: RpcSuccessResponseResult<'getAccounts'> = [];
    if (purposes.includes(AddressPurpose.Payment)) {
      response.push({ ...paymentAddress, walletType: 'software' });
    }
    if (purposes.includes(AddressPurpose.Ordinals)) {
      response.push({ ...ordinalsAddress, walletType: 'software' });
    }
    return response;
  }

  private async signMessage(
    params: RpcRequestParams<'signMessage'>
  ): Promise<RpcSuccessResponseResult<'signMessage'>> {
    const { message, address } = params;
    const addressType = getAddressInfo(address).type;
    const Bip322supportedTypes = [AddressType.p2wpkh, AddressType.p2tr];
    if (Bip322supportedTypes.includes(addressType)) {
      const response = await window.unisat.signMessage(message, 'bip322-simple');
      return {
        address,
        messageHash: '',
        signature: response,
        protocol: MessageSigningProtocols.BIP322,
      };
    }
    const response = await window.unisat.signMessage(message, 'ecdsa');
    return {
      address,
      messageHash: '',
      signature: response,
      protocol: MessageSigningProtocols.ECDSA,
    };
  }

  private async sendTransfer(
    params: RpcRequestParams<'sendTransfer'>
  ): Promise<RpcSuccessResponseResult<'sendTransfer'>> {
    const { recipients } = params;
    if (recipients.length > 1) {
      throw new Error('Only one recipient is supported by this wallet provider');
    }
    const txid = await window.unisat.sendBitcoin(recipients[0].address, recipients[0].amount);

    return {
      txid,
    };
  }

  private async signPsbt(
    params: RpcRequestParams<'signPsbt'>
  ): Promise<RpcSuccessResponseResult<'signPsbt'>> {
    const { psbt, signInputs, broadcast } = params;
    const psbtHex = Buffer.from(psbt, 'base64').toString('hex');
    const signedPsbt = await window.unisat.signPsbt(psbtHex, {
      autoFinalized: broadcast,
      toSignInputs: convertSignInputsToInputType(signInputs),
    });
    const signedPsbtBase64 = Buffer.from(signedPsbt, 'hex').toString('base64');

    let txid: string | undefined;
    if (broadcast) {
      txid = await window.unisat.pushPsbt(signedPsbt);
    }

    return {
      psbt: signedPsbtBase64,
      txid,
    };
  }

  requestInternal = async <M extends Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>> => {
    try {
      switch (method) {
        case 'getAccounts': {
          const response: RpcSuccessResponseResult<'getAccounts'> = await this.getAccounts(
            params as RpcRequestParams<'getAccounts'>
          );
          return {
            status: 'success',
            result: response as RpcSuccessResponseResult<M>,
          };
        }
        case 'sendTransfer': {
          const response = await this.sendTransfer(params as RpcRequestParams<'sendTransfer'>);
          return {
            status: 'success',
            result: response as RpcSuccessResponseResult<M>,
          };
        }
        case 'signMessage': {
          const response = await this.signMessage(params as RpcRequestParams<'signMessage'>);
          return {
            status: 'success',
            result: response as RpcSuccessResponseResult<M>,
          };
        }
        case 'signPsbt': {
          const response = await this.signPsbt(params as RpcRequestParams<'signPsbt'>);
          return {
            status: 'success',
            result: response as RpcSuccessResponseResult<M>,
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

  public addListener: AddListener = ({ eventName, cb }) => {
    switch (eventName) {
      case 'accountChange': {
        const handler = () => {
          cb({ type: 'accountChange' });
        };
        window.unisat.on('accountsChanged', handler);

        return () => {
          window.unisat.removeListener('accountsChanged', handler);
        };
      }
      case 'networkChange': {
        const handler = () => {
          // The type is being incorrectly forced here to make it work as part
          // of an unrelated refactor, since unisat support is no longer
          // actively maintained. Consider removing unisat support.
          //
          // https://linear.app/xverseapp/issue/ENG-7924
          cb({ type: 'networkChange' } as NetworkChangeEvent);
        };
        window.unisat.on('networkChanged', handler);

        return () => {
          window.unisat.removeListener('networkChanged', handler);
        };
      }
      default: {
        console.error('Event not supported by the selected wallet');
        return () => {};
      }
    }
  };
}

export { UnisatAdapter };
