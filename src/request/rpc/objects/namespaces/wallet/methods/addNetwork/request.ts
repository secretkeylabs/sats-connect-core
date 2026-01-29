import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import { BitcoinNetworkType, StacksNetworkType, StarknetNetworkType } from 'src/types';
import * as v from 'valibot';

export const walletAddNetworkParamsSchema = v.variant('chain', [
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

export type WalletAddNetworkParams = v.InferOutput<typeof walletAddNetworkParamsSchema>;
export const walletAddNetworkRequestSchema = createRequestSchema({
  paramsSchema: walletAddNetworkParamsSchema,
  method: walletMethods.wallet_addNetwork,
});

export type WalletAddNetworkRequest = v.InferOutput<typeof walletAddNetworkRequestSchema>;
