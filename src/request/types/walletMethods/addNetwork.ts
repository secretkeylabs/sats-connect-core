import {
  rpcRequestMessageSchema,
  MethodParamsAndResult,
  BitcoinNetworkType,
  StacksNetworkType,
  StarknetNetworkType,
} from 'src/types';
import * as v from 'valibot';
import {
  bitcoinNetworkConfigurationSchema,
  sparkNetworkConfigurationSchema,
  stacksNetworkConfigurationSchema,
  starknetNetworkConfigurationSchema,
} from './utils';

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

// ---- V2 ----

export const addNetworkV2MethodName = 'wallet_addNetworkV2';
export const bitcoinNetworkConfigurationOptionsSchema = v.omit(bitcoinNetworkConfigurationSchema, [
  'id',
]);
export const sparkNetworkConfigurationOptionsSchema = v.omit(sparkNetworkConfigurationSchema, [
  'id',
]);
export const stacksNetworkConfigurationOptionsSchema = v.omit(stacksNetworkConfigurationSchema, [
  'id',
]);
export const starknetNetworkConfigurationOptionsSchema = v.omit(
  starknetNetworkConfigurationSchema,
  ['id']
);
export type BitcoinNetworkConfigurationOptions = v.InferOutput<
  typeof bitcoinNetworkConfigurationOptionsSchema
>;
export type SparkNetworkConfigurationOptions = v.InferOutput<
  typeof sparkNetworkConfigurationOptionsSchema
>;
export type StacksNetworkConfigurationOptions = v.InferOutput<
  typeof stacksNetworkConfigurationOptionsSchema
>;
export type StarknetNetworkConfigurationOptions = v.InferOutput<
  typeof starknetNetworkConfigurationOptionsSchema
>;
export const networkConfigurationOptionsSchema = v.variant('chain', [
  bitcoinNetworkConfigurationOptionsSchema,
  sparkNetworkConfigurationOptionsSchema,
  stacksNetworkConfigurationOptionsSchema,
  starknetNetworkConfigurationOptionsSchema,
]);
export type NetworkConfigurationOptions = v.InferOutput<typeof networkConfigurationOptionsSchema>;
export const addNetworkV2ParamsSchema = v.object({
  network: networkConfigurationOptionsSchema,
  isActive: v.optional(v.boolean()),
});
export type AddNetworkV2Params = v.InferOutput<typeof addNetworkV2ParamsSchema>;
export const addNetworkV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(addNetworkV2MethodName),
    params: addNetworkV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type AddNetworkV2RequestMessage = v.InferOutput<typeof addNetworkV2RequestMessageSchema>;
export const addNetworkV2ResultSchema = v.object({
  id: v.string(),
});
export type AddNetworkV2Result = v.InferOutput<typeof addNetworkV2ResultSchema>;
export type AddNetworkV2 = MethodParamsAndResult<AddNetworkV2Params, AddNetworkV2Result>;
