import { getProviderById } from '../provider';
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

export * from './types';
