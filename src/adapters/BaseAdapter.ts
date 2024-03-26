import { BtcRequests, Params, Requests, StxRequests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';
import { Provider, getProviderById } from '../provider';

class BaseAdapter extends SatsConnectAdapter {
  id = '';

  constructor(providerId: string) {
    super();
    this.id = providerId;
  }

  request = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    return request(method, params, this.id);
  };
}

export { BaseAdapter };
