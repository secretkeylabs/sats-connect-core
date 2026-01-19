import { rpcRequestMessageSchema, MethodParamsAndResult } from 'src/types';
import * as v from 'valibot';
import {
  bitcoinNetworkSchema,
  sparkNetworkSchema,
  stacksNetworkSchema,
  starknetNetworkSchema,
} from './utils';

export const addNetworkMethodName = 'wallet_addNetwork';
export const bitcoinNetworkDefinitionSchema = v.omit(bitcoinNetworkSchema, ['id']);
export const sparkNetworkDefinitionSchema = v.omit(sparkNetworkSchema, ['id']);
export const stacksNetworkDefinitionSchema = v.omit(stacksNetworkSchema, ['id']);
export const starknetNetworkDefinitionSchema = v.omit(starknetNetworkSchema, ['id']);
export type BitcoinNetworkDefinition = v.InferOutput<typeof bitcoinNetworkDefinitionSchema>;
export type SparkNetworkDefinition = v.InferOutput<typeof sparkNetworkDefinitionSchema>;
export type StacksNetworkDefinition = v.InferOutput<typeof stacksNetworkDefinitionSchema>;
export type StarknetNetworkDefinition = v.InferOutput<typeof starknetNetworkDefinitionSchema>;
export const newNetworkDefinitionSchema = v.variant('chain', [
  bitcoinNetworkDefinitionSchema,
  sparkNetworkDefinitionSchema,
  stacksNetworkDefinitionSchema,
  starknetNetworkDefinitionSchema,
]);
export type NewNetworkDefinition = v.InferOutput<typeof newNetworkDefinitionSchema>;
export const addNetworkParamsSchema = v.object({
  network: newNetworkDefinitionSchema,
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
