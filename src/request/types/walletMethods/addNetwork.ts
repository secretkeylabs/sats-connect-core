import * as v from 'valibot';
import {
  BitcoinNetworkType,
  MethodParamsAndResult,
  rpcRequestMessageSchema,
  StacksNetworkType,
  StarknetNetworkType,
} from '../../../types';

export const addNetworkMethodName = 'wallet_addNetwork';
export const addNetworkParamsSchema = v.variant('chain', [
  v.object({
    chain: v.literal('bitcoin'),
    type: v.enum(BitcoinNetworkType),
    name: v.string(),
    rpcUrl: v.string(),
    rpcFallbackUrl: v.optional(v.string()),
    indexerUrl: v.optional(v.string()),
    blockExplorerUrl: v.optional(v.string()),

    switch: v.optional(v.boolean()),
  }),
  v.object({
    chain: v.literal('stacks'),
    name: v.string(),
    type: v.enum(StacksNetworkType),
    rpcUrl: v.string(),
    blockExplorerUrl: v.optional(v.string()),

    switch: v.optional(v.boolean()),
  }),
  v.object({
    chain: v.literal('starknet'),
    name: v.string(),
    type: v.enum(StarknetNetworkType),
    rpcUrl: v.string(),
    blockExplorerUrl: v.optional(v.string()),

    switch: v.optional(v.boolean()),
  }),
]);
export type AddNetworkParams = v.InferOutput<typeof addNetworkParamsSchema>;
export const addNetworkRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(addNetworkMethodName),
    params: addNetworkParamsSchema,
    id: v.string(),
  }).entries,
});
export type AddNetworkRequestMessage = v.InferOutput<typeof addNetworkRequestMessageSchema>;
export const addNetworkResultSchema = v.object({
  id: v.string(),
});
export type AddNetworkResult = v.InferOutput<typeof addNetworkResultSchema>;
export type AddNetwork = MethodParamsAndResult<AddNetworkParams, AddNetworkResult>;
