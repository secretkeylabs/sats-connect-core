import { getProviderById } from '../provider';
import {
  RpcBase,
  RpcError,
  RpcErrorCode,
  RpcResult,
  RpcSuccessResponse,
  rpcResponseMessageSchema,
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

  const parseResult = v.safeParse(rpcResponseMessageSchema, response);

  if (!parseResult.success) {
    return {
      status: 'error',
      error: {
        code: RpcErrorCode.INTERNAL_ERROR,
        message: 'Received unknown response from provider.',
        data: response,
      },
    };
  }

  const parsedResponse = parseResult.output;
  if ('error' in parsedResponse) {
    return {
      status: 'error',
      error: parsedResponse.error as RpcError,
    };
  }
  return {
    status: 'success',
    result: parsedResponse.result as Return<Method>,
  };
};

export * from './types';
