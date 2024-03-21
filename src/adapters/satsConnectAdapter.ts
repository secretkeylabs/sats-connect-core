import { BtcRequestMethod, Params, Requests, StxRequestMethod } from '../request';
import { RpcResult } from '../types';

abstract class SatsConnectAdapter {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract url: string;

  supportedMethods: (StxRequestMethod | BtcRequestMethod)[] = [];

  abstract request<Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined>;
}
export { SatsConnectAdapter };
