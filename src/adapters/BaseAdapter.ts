import { Params, Requests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';

class BaseAdapter extends SatsConnectAdapter {
  id = '';

  constructor(providerId: string) {
    super();
    this.id = providerId;
  }

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    return request(method, params, this.id);
  };
}

export { BaseAdapter };
