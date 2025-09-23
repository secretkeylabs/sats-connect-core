import { AddressPurpose } from 'src/addresses';
import { GetInfoResult, Params, ProviderPlatform, Requests } from '../request';
import { RpcResult } from '../types';

export const sanitizeRequest = <Method extends keyof Requests>(
  method: Method,
  params: Params<Method>,
  providerInfo: GetInfoResult
): { method: Method; params: Params<Method>; overrideResponse?: RpcResult<Method> } => {
  try {
    // best effort to sanitize the request
    // if something goes wrong, we just return the original request
    const [major, minor, patch] = providerInfo.version.split('.').map((part) => parseInt(part, 10));
    const platform = providerInfo.platform;

    if (
      // platform is missing for versions < 1.5.0 on web and < 1.55.0 on mobile
      !platform ||
      (platform === ProviderPlatform.Web && major <= 1 && minor <= 4) ||
      (platform === ProviderPlatform.Mobile && major <= 1 && minor <= 54)
    ) {
      const v1Sanitized = sanitizeAddressPurposeRequest(method, params);
      method = v1Sanitized.method;
      params = v1Sanitized.params;
    }
  } catch {
    // ignore errors
  }

  return { method, params };
};

const sanitizeAddressPurposeRequest = <Method extends keyof Requests>(
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
