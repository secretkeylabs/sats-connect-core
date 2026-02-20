// NOTE: These schemas should be identical to the network definitions in
// xverse-core. They're re-defined here instead of being imported to avoid
// having xverse-core as a dependency, since it has side effects and doesn't
// support tree-shaking, which would make sats-connect-core too heavy.

import type { ExactObject } from 'src/utils/exact';
import * as v from 'valibot';

export const networkConfigurationChains = {
  bitcoin: 'bitcoin',
  spark: 'spark',
  stacks: 'stacks',
  starknet: 'starknet',
} as const;

export const networkConfigurationChainSchema = v.enum(networkConfigurationChains);

export type NetworkConfigurationChain = v.InferOutput<typeof networkConfigurationChainSchema>;

export const networkConfigurationSources = {
  builtin: 'builtin',
  custom: 'custom',
} as const;

export const networkConfigurationSourceSchema = v.enum(networkConfigurationSources);

export type NetworkConfigurationSource = v.InferOutput<typeof networkConfigurationSourceSchema>;

export const commonNetworkConfigurationSchema = v.object({
  /** Unique ID that identifies this network's settings. */
  id: v.string(),

  /**
   * A human readable name intended to be displayed to users for this network.
   * E.g., "Bitcoin Mainnet", "My Custom Regteset", "Starknet Sepolia"
   */
  name: v.string(),

  /**
   * The mode of operation of the chain. Usually chains have a "mainnet" and one
   * or more testnets, each which may have slightly different behavior.
   */
  mode: v.picklist([]),

  /**
   * How the network configuration was created.
   */
  source: networkConfigurationSourceSchema,

  /**
   * URL to a block explorer for this network. The URL should expect to be
   * concatenated with the path to a transaction, like `/<transaction_id>`.
   *
   * Note that although this field is not yet deprecated, it will most likely be
   * removed in favor of a more robust explorer configuration in the future. See
   * https://linear.app/xverseapp/issue/ENG-7808/explore-networks-refactor#comment-ebb3698e
   */
  blockExplorerUrl: v.optional(
    v.union([
      v.pipe(
        v.literal(''),
        v.transform(() => undefined)
      ),
      v.pipe(v.string(), v.url()),
    ])
  ),
});

const bitcoinChainMode = {
  mainnet: 'mainnet',
  testnet: 'testnet',
  testnet4: 'testnet4',
  signet: 'signet',
  regtest: 'regtest',
} as const;

const bitcoinChainModeSchema = v.pipe(v.string(), v.enum(bitcoinChainMode));

export type BitcoinNetworkConfigurationChainMode = v.InferOutput<typeof bitcoinChainModeSchema>;

export const bitcoinNetworkConfigurationSchema = v.object({
  ...commonNetworkConfigurationSchema.entries,
  chain: v.literal(networkConfigurationChains.bitcoin),
  mode: bitcoinChainModeSchema,
  xverseApiUrl: v.pipe(v.string(), v.url()),
  electrsApiUrl: v.pipe(v.string(), v.url()),
});

export type BitcoinNetworkConfiguration = v.InferOutput<typeof bitcoinNetworkConfigurationSchema>;

export const sparkChainMode = {
  mainnet: 'mainnet',
  regtest: 'regtest',
} as const;

const sparkChainModeSchema = v.pipe(v.string(), v.enum(sparkChainMode));

export type SparkNetworkConfigurationChainMode = v.InferOutput<typeof sparkChainModeSchema>;

export const sparkNetworkConfigurationSchema = v.object({
  ...commonNetworkConfigurationSchema.entries,
  chain: v.literal(networkConfigurationChains.spark),
  mode: sparkChainModeSchema,
  electrsApiUrl: v.pipe(v.string(), v.url()),
});

export type SparkNetworkConfiguration = v.InferOutput<typeof sparkNetworkConfigurationSchema>;

export const stacksChainMode = {
  mainnet: 'mainnet',
  testnet: 'testnet',
  devnet: 'devnet',
  mocknet: 'mocknet',
} as const;

export const stacksChainModeSchema = v.pipe(v.string(), v.enum(stacksChainMode));

export type StacksNetworkConfigurationChainMode = v.InferOutput<typeof stacksChainModeSchema>;

export const stacksNetworkConfigurationSchema = v.object({
  ...commonNetworkConfigurationSchema.entries,
  chain: v.literal(networkConfigurationChains.stacks),
  mode: stacksChainModeSchema,
  stacksApiUrl: v.pipe(v.string(), v.url()),
  xverseApiUrl: v.pipe(v.string(), v.url()),
});

export type StacksNetworkConfiguration = v.InferOutput<typeof stacksNetworkConfigurationSchema>;

export const starknetChainMode = {
  mainnet: 'mainnet',
  sepolia: 'sepolia',
} as const;

const starknetChainModeSchema = v.pipe(v.string(), v.enum(starknetChainMode));

export type StarknetNetworkConfigurationChainMode = v.InferOutput<typeof starknetChainModeSchema>;

export const starknetNetworkConfigurationSchema = v.object({
  ...commonNetworkConfigurationSchema.entries,
  chain: v.literal(networkConfigurationChains.starknet),
  mode: starknetChainModeSchema,
  rpcApiUrl: v.pipe(v.string(), v.url()),
  xverseApiUrl: v.pipe(v.string(), v.url()),
});

export type StarknetNetworkConfiguration = v.InferOutput<typeof starknetNetworkConfigurationSchema>;

export const networkConfigurationSchema = v.variant('chain', [
  bitcoinNetworkConfigurationSchema,
  sparkNetworkConfigurationSchema,
  stacksNetworkConfigurationSchema,
  starknetNetworkConfigurationSchema,
]);

export type NetworkConfiguration = v.InferOutput<typeof networkConfigurationSchema>;

export type ActiveNetworks = ExactObject<
  NetworkConfigurationChain,
  {
    bitcoin: BitcoinNetworkConfiguration;
    spark: SparkNetworkConfiguration;
    stacks: StacksNetworkConfiguration;
    starknet: StarknetNetworkConfiguration;
  }
>;

// #### Custom Sats Connect values and types ####

const omitFields = ['id', 'source'] as const;
// Network configuration schemas (omitting 'id' and 'source' fields)
export const bitcoinNetworkConfigurationOptionsSchema = v.omit(
  bitcoinNetworkConfigurationSchema,
  omitFields
);
export type BitcoinNetworkConfigurationOptions = v.InferOutput<
  typeof bitcoinNetworkConfigurationOptionsSchema
>;
export const sparkNetworkConfigurationOptionsSchema = v.omit(
  sparkNetworkConfigurationSchema,
  omitFields
);
export type SparkNetworkConfigurationOptions = v.InferOutput<
  typeof sparkNetworkConfigurationOptionsSchema
>;
export const stacksNetworkConfigurationOptionsSchema = v.omit(
  stacksNetworkConfigurationSchema,
  omitFields
);
export type StacksNetworkConfigurationOptions = v.InferOutput<
  typeof stacksNetworkConfigurationOptionsSchema
>;
export const starknetNetworkConfigurationOptionsSchema = v.omit(
  starknetNetworkConfigurationSchema,
  omitFields
);
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

export const allResolvedNetworksSchema = v.object({
  active: v.object({
    bitcoin: bitcoinNetworkConfigurationSchema,
    spark: sparkNetworkConfigurationSchema,
    stacks: stacksNetworkConfigurationSchema,
    starknet: starknetNetworkConfigurationSchema,
  }),
  all: v.array(networkConfigurationSchema),
});

export type AllResolvedNetworks = v.InferOutput<typeof allResolvedNetworksSchema>;
