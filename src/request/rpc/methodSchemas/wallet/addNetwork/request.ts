import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletAddNetworkRequestSchema = createRequestSchema({
  paramsSchema: v.variant('chain', [
    v.object({
      chain: v.literal('bitcoin'),
      type: v.picklist(['Mainnet', 'Testnet', 'Signet']),
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
      type: v.picklist(['Mainnet', 'Testnet']),
      rpcUrl: v.string(),
      blockExplorerUrl: v.optional(v.string()),
      switch: v.optional(v.boolean()),
    }),
    v.object({
      chain: v.literal('starknet'),
      name: v.string(),
      type: v.picklist(['Mainnet', 'Testnet', 'Sepolia']),
      rpcUrl: v.string(),
      blockExplorerUrl: v.optional(v.string()),
      switch: v.optional(v.boolean()),
    }),
  ]),
  method: walletMethods.wallet_addNetwork,
});

export type WalletAddNetworkRequest = v.InferOutput<typeof walletAddNetworkRequestSchema>;
