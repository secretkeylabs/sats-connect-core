import * as v from 'valibot';
import type { ExactObject } from '../exact';
import type { Method } from '../methods';
import { RpcId } from '../shared';
import { type BitcoinRequests, bitcoinRequestSchema } from './objects/namespaces/bitcoin';
import { type OrdinalsRequests, ordinalsRequestSchema } from './objects/namespaces/ordinals';
import { type RunesRequests, runesRequestSchema } from './objects/namespaces/runes';
import { type SparkRequests, sparkRequestSchema } from './objects/namespaces/spark';
import { type StacksRequests, stacksRequestSchema } from './objects/namespaces/stacks';
import { type WalletRequests, walletRequestSchema } from './objects/namespaces/wallet';

export type RpcRequests = ExactObject<
  Method,
  BitcoinRequests &
    StacksRequests &
    SparkRequests &
    RunesRequests &
    OrdinalsRequests &
    WalletRequests
>;

export type RpcRequestParams<M extends Method> = RpcRequests[M]['params'];

export const rpcRequestSchema = v.variant('method', [
  bitcoinRequestSchema,
  stacksRequestSchema,
  sparkRequestSchema,
  runesRequestSchema,
  ordinalsRequestSchema,
  walletRequestSchema,
]);

export type RpcRequest = v.InferOutput<typeof rpcRequestSchema>;

export function createRpcRequest<M extends Method>({
  method,
  params,
  id,
}: {
  method: M;
  params: RpcRequestParams<M>;
  id: RpcId;
}): RpcRequests[M] {
  return {
    jsonrpc: '2.0',
    method,
    params,
    id,
  } as RpcRequests[M];
}
