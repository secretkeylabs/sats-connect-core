import * as v from 'valibot';
import {
  bitcoinNetworkConfigurationSchema,
  sparkNetworkConfigurationSchema,
  stacksNetworkConfigurationSchema,
  starknetNetworkConfigurationSchema,
} from './utils';
import { rpcRequestMessageSchema, MethodParamsAndResult } from 'src/types';

export const getNetworksMethodName = 'wallet_getNetworks';
export const getNetworksParamsSchema = v.nullish(v.null());
export type GetNetworksParams = v.InferOutput<typeof getNetworksParamsSchema>;
// NOTE: This schema is expected to be identical to the one in xverse-core
// except for the active networks, which should have the actual network
// objects instead of their IDs.
//
// See xverse-core for reference:
// https://github.com/secretkeylabs/xverse-core-private/blob/7835712b0cf4af60e9636c25abc972497c38e0d8/persistentStoreManager/stores/walletOptions/index.ts#L83
export const getNetworksResultSchema = v.object({
  active: v.object({
    bitcoin: bitcoinNetworkConfigurationSchema,
    stacks: stacksNetworkConfigurationSchema,
    spark: sparkNetworkConfigurationSchema,
    starknet: starknetNetworkConfigurationSchema,
  }),
  builtin: v.object({
    bitcoin: v.array(bitcoinNetworkConfigurationSchema),
    stacks: v.array(stacksNetworkConfigurationSchema),
    spark: v.array(sparkNetworkConfigurationSchema),
    starknet: v.array(starknetNetworkConfigurationSchema),
  }),
  custom: v.object({
    bitcoin: v.array(bitcoinNetworkConfigurationSchema),
    stacks: v.array(stacksNetworkConfigurationSchema),
    spark: v.array(sparkNetworkConfigurationSchema),
    starknet: v.array(starknetNetworkConfigurationSchema),
  }),
});
export type GetNetworksResult = v.InferOutput<typeof getNetworksResultSchema>;
export const getNetworksRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getNetworksMethodName),
    params: getNetworksParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetNetworksRequestMessage = v.InferOutput<typeof getNetworksRequestMessageSchema>;
export type GetNetworks = MethodParamsAndResult<GetNetworksParams, GetNetworksResult>;
