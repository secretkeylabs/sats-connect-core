import * as v from 'valibot';
import type { ExactObject } from '../exact';
import type { Method } from '../methods';

// Import namespace-specific aggregated types and schemas
import {
  type BitcoinSuccessResponses,
  bitcoinSuccessResponseSchemas,
} from './objects/namespaces/bitcoin';
import {
  type OrdinalsSuccessResponses,
  ordinalsSuccessResponseSchemas,
} from './objects/namespaces/ordinals';
import {
  type RunesSuccessResponses,
  runesSuccessResponseSchemas,
} from './objects/namespaces/runes';
import {
  type SparkSuccessResponses,
  sparkSuccessResponseSchemas,
} from './objects/namespaces/spark';
import {
  type StacksSuccessResponses,
  stacksSuccessResponseSchemas,
} from './objects/namespaces/stacks';
import {
  type WalletSuccessResponses,
  walletSuccessResponseSchemas,
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
  ...bitcoinSuccessResponseSchemas,
  ...stacksSuccessResponseSchemas,
  ...sparkSuccessResponseSchemas,
  ...runesSuccessResponseSchemas,
  ...ordinalsSuccessResponseSchemas,
  ...walletSuccessResponseSchemas,
]);

export type RpcSuccessResponse = v.InferOutput<typeof rpcSuccessResponseSchema>;
