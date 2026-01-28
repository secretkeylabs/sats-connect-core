import * as v from 'valibot';
import type { ExactObject } from '../exact';
import type { Method } from '../methods';

import { type BitcoinRequests, bitcoinRequestSchemas } from './objects/namespaces/bitcoin';
import { type OrdinalsRequests, ordinalsRequestSchemas } from './objects/namespaces/ordinals';
import { type RunesRequests, runesRequestSchemas } from './objects/namespaces/runes';
import { type SparkRequests, sparkRequestSchemas } from './objects/namespaces/spark';
import { type StacksRequests, stacksRequestSchemas } from './objects/namespaces/stacks';
import { type WalletRequests, walletRequestSchemas } from './objects/namespaces/wallet';

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
