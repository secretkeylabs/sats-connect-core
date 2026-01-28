import * as v from 'valibot';
import type { Method } from '../methods';
import type { ExactObject } from '../exact';

// Import namespace-specific aggregated types and schemas
import {
  type BitcoinSuccessResponses,
  bitcoinSuccessResponseSchemas,
} from './methodSchemas/bitcoin';
import { type StacksSuccessResponses, stacksSuccessResponseSchemas } from './methodSchemas/stacks';
import { type SparkSuccessResponses, sparkSuccessResponseSchemas } from './methodSchemas/spark';
import { type RunesSuccessResponses, runesSuccessResponseSchemas } from './methodSchemas/runes';
import {
  type OrdinalsSuccessResponses,
  ordinalsSuccessResponseSchemas,
} from './methodSchemas/ordinals';
import { type WalletSuccessResponses, walletSuccessResponseSchemas } from './methodSchemas/wallet';

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

export const rpcSuccessResponseSchema = v.union([
  ...bitcoinSuccessResponseSchemas,
  ...stacksSuccessResponseSchemas,
  ...sparkSuccessResponseSchemas,
  ...runesSuccessResponseSchemas,
  ...ordinalsSuccessResponseSchemas,
  ...walletSuccessResponseSchemas,
]);

export type RpcSuccessResponse = v.InferOutput<typeof rpcSuccessResponseSchema>;
