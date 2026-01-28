import { AddressPurpose } from 'src/addresses';
import { RequestReturn } from '.';
import { bitcoinMethods, Method } from './methods';
import { ProviderPlatform } from './rpc/objects/namespaces/bitcoin/shared';
import { RpcRequestParams } from './rpc/requests';
import { RpcSuccessResponseResult } from './rpc/responses';

type BitcoinGetInfoResult = RpcSuccessResponseResult<typeof bitcoinMethods.getInfo>;

export const sanitizeRequest = <M extends Method>(
  method: M,
  params: RpcRequestParams<M>,
  providerInfo: BitcoinGetInfoResult
): { method: M; params: RpcRequestParams<M>; overrideResponse?: RequestReturn<M> } => {
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

const sanitizeAddressPurposeRequest = <M extends Method>(
  method: M,
  params: RpcRequestParams<M>
): { method: M; params: RpcRequestParams<M> } => {
  const filterPurposes = (purposes?: AddressPurpose[]) =>
    purposes?.filter(
      (purpose) => purpose !== AddressPurpose.Spark && purpose !== AddressPurpose.Starknet
    );

  if (method === 'wallet_connect') {
    const typedParams = params as RpcRequestParams<'wallet_connect'>;

    if (!typedParams) {
      return { method, params };
    }

    const { addresses, ...rest } = typedParams;
    const overrideParams = {
      ...rest,
      addresses: filterPurposes(addresses),
    } as RpcRequestParams<M>;

    return { method, params: overrideParams };
  }

  if (method === 'getAccounts') {
    const typedParams = params as RpcRequestParams<'getAccounts'>;
    const { purposes, ...rest } = typedParams;
    const overrideParams = {
      ...rest,
      purposes: filterPurposes(purposes),
    } as RpcRequestParams<M>;

    return { method, params: overrideParams };
  }

  if (method === 'getAddresses') {
    const typedParams = params as RpcRequestParams<'getAddresses'>;
    const { purposes, ...rest } = typedParams;
    const overrideParams = {
      ...rest,
      purposes: filterPurposes(purposes),
    } as RpcRequestParams<M>;

    return { method, params: overrideParams };
  }

  return { method, params };
};
