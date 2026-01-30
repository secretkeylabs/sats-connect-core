import type { Method } from 'src/request/methods';
import type { RpcRequestParams } from 'src/request/rpc/requests';
import { DefaultAdaptersInfo } from '.';
import { getProviderById } from '../provider';
import type { AddListener } from '../provider/types';
import type { RequestReturn } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';

type UtxoProvider<M extends Method> = {
  request: (method: M, params: RpcRequestParams<M>) => Promise<RequestReturn<M>>;
  addListener: AddListener;
};

interface FordefiProviders<M extends Method> {
  UtxoProvider: UtxoProvider<M>;
}

declare global {
  interface Window {
    FordefiProviders?: FordefiProviders<Method>;
  }
}

class FordefiAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.fordefi.id;

  requestInternal = async <M extends Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>> => {
    const provider = getProviderById(this.id);

    if (!provider) {
      throw new Error('no wallet provider was found');
    }
    if (!method) {
      throw new Error('A wallet method is required');
    }

    return await provider.request(method, params);
  };

  public addListener: AddListener = ({ eventName, cb }) => {
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

    return provider.addListener(eventName, cb);
  };
}

export { FordefiAdapter };
