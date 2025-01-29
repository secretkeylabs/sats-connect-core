import { AddListener } from '../provider/types';
import { DefaultAdaptersInfo } from '.';
import { Params, Requests, Return, StxRequests } from '../request';
import { RpcErrorCode, RpcResult } from '../types';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { getProviderById } from '../provider';

type UtxoProvider<Method extends keyof Requests = keyof Requests> = {
  request: (method: Method, params: Params<Method>) => Promise<Return<Method>>;
  addListener: AddListener;
};

interface FordefiProviders {
  UtxoProvider: UtxoProvider;
}

declare global {
  interface Window {
    FordefiProviders?: FordefiProviders;
  }
}

class FordefiAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.fordefi.id;

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method>> => {
    const provider = getProviderById(this.id);

    if (!provider) {
      throw new Error('no wallet provider was found');
    }
    if (!method) {
      throw new Error('A wallet method is required');
    }

    try {
      const response = await provider.request(method, params);

      return {
        status: 'success',
        result: response as Return<Method>,
      };
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

  public addListener: AddListener = (eventName, cb) => {
    const provider = getProviderById(this.id);

    if (!provider) {
      throw new Error('no wallet provider was found');
    }

    if (!provider.addListener) {
      console.error(
        `The wallet provider you are using does not support the addListener method. Please update your wallet provider.`
      );
      return () => {};
    }

    return provider.addListener(
      eventName as Parameters<AddListener>[0],
      cb as Parameters<AddListener>[1]
    );
  };
}

export { FordefiAdapter };
