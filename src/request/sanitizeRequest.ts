import { AddressPurpose } from 'src/addresses';
import { RpcResult } from 'src/types';
import { Params, Requests } from './types';

export const sanitizeRequest = <Method extends keyof Requests>(
  method: Method,
  params: Params<Method>,
  providerVersion: number
): { method: Method; params: Params<Method>; overrideResponse?: RpcResult<Method> } => {
  if (method === 'wallet_connect' && providerVersion < 1) {
    const typedParams = params as Params<'wallet_connect'>;

    if (!typedParams) {
      return { method, params };
    }

    const { addresses, ...rest } = typedParams;

    const sanitizedAddresses = addresses?.filter(
      (addr) => addr !== AddressPurpose.Spark && addr !== AddressPurpose.Starknet
    );

    const overrideParams = { ...rest, addresses: sanitizedAddresses } as Params<Method>;

    return { method, params: overrideParams };
  }

  return { method, params };
};
