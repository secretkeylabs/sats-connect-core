import { Params, Requests } from '../request';
import { RpcResult } from '../types';

abstract class SatsConnectAdapter {
  abstract readonly id: string;

  abstract request<Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined>;
}
export { SatsConnectAdapter };
