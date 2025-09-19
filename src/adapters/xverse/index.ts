import { AddListener } from 'src/provider/types';
import { DefaultAdaptersInfo } from '..';
import { addListener, GetInfoResult, Params, request, Requests } from '../../request';
import { RpcResult } from '../../types';
import { SatsConnectAdapter } from '../satsConnectAdapter';
import { sanitizeRequest } from './sanitizeRequest';

class XverseAdapter extends SatsConnectAdapter {
  id = DefaultAdaptersInfo.xverse.id;

  providerInfo?: GetInfoResult;

  requestInternal = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method>> => {
    if (!this.providerInfo) {
      const infoResult = await request('getInfo', null, this.id);
      if (infoResult.status === 'success') {
        this.providerInfo = infoResult.result;
      }
    }

    if (this.providerInfo) {
      const sanitized = sanitizeRequest(method, params, this.providerInfo);

      if (sanitized.overrideResponse) {
        return sanitized.overrideResponse;
      }

      method = sanitized.method;
      params = sanitized.params;
    }

    return request(method, params, this.id);
  };

  addListener: AddListener = (listenerInfo) => {
    return addListener(listenerInfo, this.id);
  };
}

export { XverseAdapter };
