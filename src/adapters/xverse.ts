import type { AddListener, Listen } from 'src/provider/types';
import type { Method } from 'src/request/methods';
import type { RpcRequestParams } from 'src/request/rpc/requests';
import { DefaultAdaptersInfo } from '.';
import type { RequestReturn } from '../request';
import { addListener, listen, request } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';

class XverseAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.xverse.id;

  requestInternal = async <M extends Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>> => {
    return request(method, params, this.id);
  };

  listen: Listen = (event, cb) => listen(event, cb, this.id);

  addListener: AddListener = (listenerInfo) => {
    return addListener(listenerInfo, this.id);
  };
}

export { XverseAdapter };
