import { BtcRequestMethod, Params, Requests, StxRequestMethod } from 'src/request';
import { RpcResult } from 'src/types';

abstract class SatsConnectAdapter {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract url: string;

  supportedMethods: (StxRequestMethod | BtcRequestMethod)[] = [];
  installed: boolean = false;

  abstract isInstalled(): Promise<boolean>;

  abstract request<Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined>;
}
export { SatsConnectAdapter };
