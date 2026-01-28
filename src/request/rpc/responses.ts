import * as v from 'valibot';
import type { ExactObject } from '../exact';
import type { Method } from '../methods';
import { RpcId } from '../shared';
import {
  type BitcoinSuccessResponses,
  bitcoinSuccessResponseSchema,
} from './objects/namespaces/bitcoin';
import {
  type OrdinalsSuccessResponses,
  ordinalsSuccessResponseSchema,
} from './objects/namespaces/ordinals';
import { type RunesSuccessResponses, runesSuccessResponseSchema } from './objects/namespaces/runes';
import { type SparkSuccessResponses, sparkSuccessResponseSchema } from './objects/namespaces/spark';
import {
  type StacksSuccessResponses,
  stacksSuccessResponseSchema,
} from './objects/namespaces/stacks';
import {
  type WalletSuccessResponses,
  walletSuccessResponseSchema,
} from './objects/namespaces/wallet';

export type RpcSuccessResponses = ExactObject<
  Method,
  BitcoinSuccessResponses &
    StacksSuccessResponses &
    SparkSuccessResponses &
    RunesSuccessResponses &
    OrdinalsSuccessResponses &
    WalletSuccessResponses
>;

export type RpcSuccessResponseResult<M extends Method> = RpcSuccessResponses[M]['result'];

export const rpcSuccessResponseSchema = v.variant('~sats-connect-method', [
  bitcoinSuccessResponseSchema,
  stacksSuccessResponseSchema,
  sparkSuccessResponseSchema,
  runesSuccessResponseSchema,
  ordinalsSuccessResponseSchema,
  walletSuccessResponseSchema,
]);

export type RpcSuccessResponse = v.InferOutput<typeof rpcSuccessResponseSchema>;

export function createRpcSuccessResponse<M extends Method>({
  method,
  result,
  id,
}: {
  method: M;
  result: RpcSuccessResponseResult<M>;
  id: RpcId;
}): RpcSuccessResponses[M] {
  return {
    jsonrpc: '2.0',
    id,
    result,
    '~sats-connect-method': method,
  } as RpcSuccessResponses[M];
}
