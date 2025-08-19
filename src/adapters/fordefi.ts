import { AddListener } from '../provider/types';
import { DefaultAdaptersInfo } from '.';
import { Params, Requests, Return } from '../request';
import { RpcResult } from '../types';
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
