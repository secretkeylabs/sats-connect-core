import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { addressSchema } from 'src/addresses';

const walletTypeSchema = v.picklist(['software', 'ledger']);

const bitcoinNetworkConfigurationSchema = v.object({
  id: v.string(),
  chain: v.literal('bitcoin'),
  type: v.picklist(['Mainnet', 'Testnet', 'Signet']),
  name: v.string(),
  rpcUrl: v.string(),
  rpcFallbackUrl: v.optional(v.string()),
  indexerUrl: v.optional(v.string()),
  blockExplorerUrl: v.optional(v.string()),
});

const sparkNetworkConfigurationSchema = v.object({
  id: v.string(),
  chain: v.literal('spark'),
  type: v.picklist(['Mainnet', 'Testnet']),
  name: v.string(),
  rpcUrl: v.string(),
  blockExplorerUrl: v.optional(v.string()),
});

const stacksNetworkConfigurationSchema = v.object({
  id: v.string(),
  chain: v.literal('stacks'),
  type: v.picklist(['Mainnet', 'Testnet']),
  name: v.string(),
  rpcUrl: v.string(),
  blockExplorerUrl: v.optional(v.string()),
});

const starknetNetworkConfigurationSchema = v.object({
  id: v.string(),
  chain: v.literal('starknet'),
  type: v.picklist(['Mainnet', 'Testnet', 'Sepolia']),
  name: v.string(),
  rpcUrl: v.string(),
  blockExplorerUrl: v.optional(v.string()),
});

const getNetworksResultSchema = v.object({
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

export const walletGetAccountV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
    addresses: v.array(addressSchema),
    walletType: walletTypeSchema,
    networks: getNetworksResultSchema,
  }),
  method: walletMethods.wallet_getAccountV2,
});

export type WalletGetAccountV2SuccessResponse = v.InferOutput<
  typeof walletGetAccountV2SuccessResponseSchema
>;
