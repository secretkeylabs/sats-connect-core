import { BtcRequests, Params, Requests, StxRequests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcResult } from '../types';

class XverseAdapter extends SatsConnectAdapter {
  id = 'XverseProviders.BitcoinProvider';
  name = 'Xverse';
  url = 'xverse.app';

  supportedMethods: (keyof StxRequests | keyof BtcRequests)[] = [
    'getAccounts',
    'sendTransfer',
    'signMessage',
    'signPsbt',
  ];

  request = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    if (!this.supportedMethods.includes(method)) {
      console.error('Method not supported by the selected wallet');
    }

    return request(method, params, this.id);
  };
}

export { XverseAdapter };
