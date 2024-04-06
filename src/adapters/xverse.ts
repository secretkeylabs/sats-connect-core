import { Params, Requests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';
import { DefaultAdaptersInfo } from '.';

class XverseAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.xverse.id;

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    return request(method, params, this.id);
  };
}

export { XverseAdapter };
