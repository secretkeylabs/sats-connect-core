import * as v from 'valibot';
import type { Method } from '../methods';
import type { ExactObject } from '../exact';

// Import namespace-specific aggregated types and schemas
import { type BitcoinRequests, bitcoinRequestSchemas } from './methodSchemas/bitcoin';
import { type StacksRequests, stacksRequestSchemas } from './methodSchemas/stacks';
import { type SparkRequests, sparkRequestSchemas } from './methodSchemas/spark';
import { type RunesRequests, runesRequestSchemas } from './methodSchemas/runes';
import { type OrdinalsRequests, ordinalsRequestSchemas } from './methodSchemas/ordinals';
import { type WalletRequests, walletRequestSchemas } from './methodSchemas/wallet';

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
  ...bitcoinRequestSchemas,
  ...stacksRequestSchemas,
  ...sparkRequestSchemas,
  ...runesRequestSchemas,
  ...ordinalsRequestSchemas,
  ...walletRequestSchemas,
]);

export type RpcRequest = v.InferOutput<typeof rpcRequestSchema>;
