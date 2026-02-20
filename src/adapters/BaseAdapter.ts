import type { AddListener } from 'src/provider';
import type { Method } from 'src/request/methods';
import type { RpcRequestParams } from 'src/request/rpc/requests';
import type { RequestReturn } from '../request';
import { request } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';

class BaseAdapter extends SatsConnectAdapter {
  id = '';

  constructor(providerId: string) {
    super();
    this.id = providerId;
  }

  requestInternal = async <M extends Method = Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>> => {
    return request(method, params, this.id);
  };

  addListener: AddListener = (..._args) => {
    throw new Error('Method not supported for `BaseAdapter`.');
  };
}

export { BaseAdapter };
