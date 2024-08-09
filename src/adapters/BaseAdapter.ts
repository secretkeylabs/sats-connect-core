import { Params, Requests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';
import { AddListener } from 'src/provider';

class BaseAdapter extends SatsConnectAdapter {
  id = '';

  constructor(providerId: string) {
    super();
    this.id = providerId;
  }

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method>> => {
    return request(method, params, this.id);
  };

  addListener: AddListener = (..._args) => {
    throw new Error('Method not supported for `BaseAdapter`.');
  };
}

export { BaseAdapter };
