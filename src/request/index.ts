import { AddListener, getProviderById } from '../provider';
import {
  RpcErrorCode,
  RpcResult,
  rpcErrorResponseMessageSchema,
  rpcSuccessResponseMessageSchema,
} from '../types';
import * as v from 'valibot';
import { Params, Requests, Return } from './types';

export const request = async <Method extends keyof Requests>(
  method: Method,
  params: Params<Method>,
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

  const response = await provider.request(method, params);

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

export const addListener = (
  event: Parameters<AddListener>[0],
  cb: Parameters<AddListener>[1],
  providerId?: string
): ReturnType<AddListener> => {
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

  return provider.addListener(event, cb);
};

export * from './types';
