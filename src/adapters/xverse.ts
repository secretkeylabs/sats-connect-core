import { addListener, Params, Requests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';
import { DefaultAdaptersInfo } from '.';
import { AddListener } from 'src/provider/types';

class XverseAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.xverse.id;

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method>> => {
    return request(method, params, this.id);
  };

  addListener: AddListener = (listenerInfo) => {
    return addListener(listenerInfo, this.id);
  };
}

export { XverseAdapter };
