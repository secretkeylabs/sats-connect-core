import { rpcRequestMessageSchema, MethodParamsAndResult } from 'src/types';
import * as v from 'valibot';
import {
  bitcoinNetworkConfigurationSchema,
  sparkNetworkConfigurationSchema,
  stacksNetworkConfigurationSchema,
  starknetNetworkConfigurationSchema,
} from './utils';

export const addNetworkMethodName = 'wallet_addNetwork';
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
export const addNetworkParamsSchema = v.object({
  network: networkConfigurationOptionsSchema,
  isActive: v.optional(v.boolean()),
});
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
