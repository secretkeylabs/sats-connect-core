import { AddressPurpose } from 'src/addresses';
import { RpcResult } from 'src/types';
import { Params, Requests } from './types';

export const sanitizeRequest = <Method extends keyof Requests>(
  method: Method,
  params: Params<Method>,
  providerVersion: number
): { method: Method; params: Params<Method>; overrideResponse?: RpcResult<Method> } => {
  if (providerVersion < 1) {
    const v1Sanitized = sanitizeV1Request(method, params);
    method = v1Sanitized.method;
    params = v1Sanitized.params;
  }

  return { method, params };
};

const sanitizeV1Request = <Method extends keyof Requests>(
  method: Method,
  params: Params<Method>
): { method: Method; params: Params<Method> } => {
  const filterPurposes = (purposes?: AddressPurpose[]) =>
    purposes?.filter(
      (purpose) => purpose !== AddressPurpose.Spark && purpose !== AddressPurpose.Starknet
    );

  if (method === 'wallet_connect') {
    const typedParams = params as Params<'wallet_connect'>;

    if (!typedParams) {
      return { method, params };
    }

    const { addresses, ...rest } = typedParams;
    const overrideParams = {
      ...rest,
      addresses: filterPurposes(addresses),
    } as Params<Method>;

    return { method, params: overrideParams };
  }

  if (method === 'getAccounts') {
    const typedParams = params as Params<'getAccounts'>;
    const { purposes, ...rest } = typedParams;
    const overrideParams = { ...rest, purposes: filterPurposes(purposes) } as Params<Method>;

    return { method, params: overrideParams };
  }

  if (method === 'getAddresses') {
    const typedParams = params as Params<'getAddresses'>;
    const { purposes, ...rest } = typedParams;
    const overrideParams = { ...rest, purposes: filterPurposes(purposes) } as Params<Method>;

    return { method, params: overrideParams };
  }

  return { method, params };
};
