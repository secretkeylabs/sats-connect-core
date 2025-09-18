import * as v from 'valibot';
import { AddListener, ListenerInfo, getProviderById } from '../provider';
import {
  RpcErrorCode,
  RpcResult,
  rpcErrorResponseMessageSchema,
  rpcSuccessResponseMessageSchema,
} from '../types';
import { sanitizeRequest } from './sanitizeRequest';
import { Params, Requests, Return } from './types';

export const request = async <Method extends keyof Requests>(
  method: Method,
  params: Params<Method>,
  /**
   * The providerId is the object path to the provider in the window object.
   * E.g., a provider available at `window.Foo.BarProvider` would have a
   * providerId of `Foo.BarProvider`.
   */
  providerId?: string
): Promise<RpcResult<Method>> => {
  let provider = window.XverseProviders?.BitcoinProvider || window.BitcoinProvider;
  if (providerId) {
    provider = await getProviderById(providerId);
  }
  if (!provider) {
    throw new Error('no wallet provider was found');
  }
  if (!method) {
    throw new Error('A wallet method is required');
  }

  const providerVersion = provider.version ?? 0;
  const {
    method: sanitizedMethod,
    params: sanitizedParams,
    overrideResponse,
  } = sanitizeRequest(method, params, providerVersion);

  if (overrideResponse) {
    return overrideResponse;
  }

  const response = await provider.request(sanitizedMethod, sanitizedParams);

  if (v.is(rpcErrorResponseMessageSchema, response)) {
    return {
      status: 'error',
      error: response.error,
    };
  }

  if (v.is(rpcSuccessResponseMessageSchema, response)) {
    return {
      status: 'success',
      result: response.result as Return<Method>,
    };
  }

  return {
    status: 'error',
    error: {
      code: RpcErrorCode.INTERNAL_ERROR,
      message: 'Received unknown response from provider.',
      data: response,
    },
  };
};

type CurrentArgs = [ListenerInfo, string | undefined];

/**
 * Adds an event listener.
 *
 * Currently expects 2 arguments, although is also capable of handling legacy
 * calls with 3 arguments consisting of:
 *
 * - event name (string)
 * - callback (function)
 * - provider ID (optional string)
 */
export const addListener = (
  // listenerInfo: ListenerInfo,
  // providerId?: string
  ...rawArgs: unknown[]
): ReturnType<AddListener> => {
  const [listenerInfo, providerId]: CurrentArgs = (() => {
    // When only 1 argument, must necessarily be a call using the current API.
    if (rawArgs.length === 1) {
      return [rawArgs[0], undefined] as CurrentArgs;
    }

    // When 2 arguments are present, may be either a call using the legacy API
    // or a call using the current API (which allows the 3rd argument to be
    // omitted).
    if (rawArgs.length === 2) {
      // Should only be a call using the legacy API
      if (typeof rawArgs[1] === 'function') {
        return [
          {
            eventName: rawArgs[0],
            cb: rawArgs[1],
          },
          undefined,
        ] as CurrentArgs;
      } else {
        return rawArgs as CurrentArgs;
      }
    }

    if (rawArgs.length === 3) {
      return [
        {
          eventName: rawArgs[0],
          cb: rawArgs[1],
        },
        rawArgs[2],
      ] as CurrentArgs;
    }

    throw new Error('Unexpected number of arguments. Expecting 2 (or 3 for legacy requests).', {
      cause: rawArgs,
    });
  })();

  let provider = window.XverseProviders?.BitcoinProvider || window.BitcoinProvider;
  if (providerId) {
    provider = getProviderById(providerId);
  }
  if (!provider) {
    throw new Error('no wallet provider was found');
  }

  // Clients may have be using the latest version of sats-connect without their
  // wallets having been updated. Until we have API versioning for the wallet,
  // we can avoid having apps crash by checking whether the adapter actually
  // supports `addListener`.
  if (!provider.addListener) {
    console.error(
      `The wallet provider you are using does not support the addListener method. Please update your wallet provider.`
    );
    return () => {};
  }

  return provider.addListener(listenerInfo);
};

export * from './types';
