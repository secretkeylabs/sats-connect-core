import { Params, Requests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';

class XverseAdapter extends SatsConnectAdapter {
  id = 'XverseProviders.BitcoinProvider';

  request = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    return request(method, params, this.id);
  };
}

export { XverseAdapter };
