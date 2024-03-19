import { BtcRequests, Params, Requests, StxRequests } from '../request';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { request } from '../request';
import { RpcErrorCode, RpcResult } from '../types';
import { Provider, getProviderById } from 'src/provider';

class BaseAdapter extends SatsConnectAdapter {
  id = '';
  name = '';
  url = '';

  supportedMethods: (keyof StxRequests | keyof BtcRequests)[] = [];

  constructor(providerInfo: Provider) {
    super();
    this.id = providerInfo.id;
    this.name = providerInfo.name;
    this.url = providerInfo.webUrl || '';
    this.supportedMethods = providerInfo.methods || [];
  }

  async isInstalled() {
    this.installed = getProviderById(this.id) !== undefined;

    return this.installed;
  }

  request = async <Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> => {
    if (!this.installed) {
      console.error('Wallet is not installed');
    }
    if (!(method in this.supportedMethods)) {
      console.error('Method not supported by the selected wallet');
    }

    return request(method, params, this.id);
  };
}

export { BaseAdapter };
