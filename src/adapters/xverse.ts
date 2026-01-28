import { AddListener } from 'src/provider/types';
import { Method } from 'src/request/methods';
import { RpcRequestParams } from 'src/request/rpc/requests';
import { DefaultAdaptersInfo } from '.';
import { addListener, request, RequestReturn } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';

class XverseAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.xverse.id;

  requestInternal = async <M extends Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>> => {
    return request(method, params, this.id);
  };

  addListener: AddListener = (listenerInfo) => {
    return addListener(listenerInfo, this.id);
  };
}

export { XverseAdapter };
