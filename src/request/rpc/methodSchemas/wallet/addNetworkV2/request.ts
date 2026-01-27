import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

// Network configuration schemas (omitting 'id' field)
const bitcoinNetworkConfigurationOptionsSchema = v.object({
  chain: v.literal('bitcoin'),
  type: v.picklist(['Mainnet', 'Testnet', 'Signet']),
  name: v.string(),
  rpcUrl: v.string(),
  rpcFallbackUrl: v.optional(v.string()),
  indexerUrl: v.optional(v.string()),
  blockExplorerUrl: v.optional(v.string()),
});

const sparkNetworkConfigurationOptionsSchema = v.object({
  chain: v.literal('spark'),
  type: v.picklist(['Mainnet', 'Testnet']),
  name: v.string(),
  rpcUrl: v.string(),
  blockExplorerUrl: v.optional(v.string()),
});

const stacksNetworkConfigurationOptionsSchema = v.object({
  chain: v.literal('stacks'),
  type: v.picklist(['Mainnet', 'Testnet']),
  name: v.string(),
  rpcUrl: v.string(),
  blockExplorerUrl: v.optional(v.string()),
});

const starknetNetworkConfigurationOptionsSchema = v.object({
  chain: v.literal('starknet'),
  type: v.picklist(['Mainnet', 'Testnet', 'Sepolia']),
  name: v.string(),
  rpcUrl: v.string(),
  blockExplorerUrl: v.optional(v.string()),
});

const networkConfigurationOptionsSchema = v.variant('chain', [
  bitcoinNetworkConfigurationOptionsSchema,
  sparkNetworkConfigurationOptionsSchema,
  stacksNetworkConfigurationOptionsSchema,
  starknetNetworkConfigurationOptionsSchema,
]);

export const walletAddNetworkV2RequestSchema = createRequestSchema({
  paramsSchema: v.object({
    network: networkConfigurationOptionsSchema,
    isActive: v.optional(v.boolean()),
  }),
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2Request = v.InferOutput<typeof walletAddNetworkV2RequestSchema>;
