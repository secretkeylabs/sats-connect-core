// NOTE: These schemas should be identical to the network definitions in
// xverse-core. They're re-defined here instead of being imported to avoid
// having xverse-core as a dependency, since it has side effects and doesn't
// support tree-shaking, which would make sats-connect-core too heavy.

import { ExactObject } from 'src/utils/exact';
import * as v from 'valibot';

export const commonNetworkSchema = v.object({
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
});

export const bitcoinChainModeSchema = v.picklist(['mainnet', 'testnet4', 'signet', 'regtest']);

export type BitcoinChainMode = v.InferOutput<typeof bitcoinChainModeSchema>;

export const bitcoinNetworkSchema = v.object({
  chain: v.literal('bitcoin'),
  ...commonNetworkSchema.entries,
  mode: bitcoinChainModeSchema,
  xverseApiUrl: v.string(),
  electrsApiUrl: v.string(),
});

export type BitcoinNetwork = v.InferOutput<typeof bitcoinNetworkSchema>;

export const sparkChainModeSchema = v.picklist(['mainnet', 'regtest']);

export type SparkChainMode = v.InferOutput<typeof sparkChainModeSchema>;

export const sparkNetworkSchema = v.object({
  chain: v.literal('spark'),
  ...commonNetworkSchema.entries,
  mode: sparkChainModeSchema,
  electrsApiUrl: v.string(),
});
export type SparkNetwork = v.InferOutput<typeof sparkNetworkSchema>;

export const stacksChainModeSchema = v.picklist(['mainnet', 'testnet', 'devnet', 'mocknet']);

export type StacksChainMode = v.InferOutput<typeof stacksChainModeSchema>;

export const stacksNetworkSchema = v.object({
  chain: v.literal('stacks'),
  ...commonNetworkSchema.entries,
  mode: stacksChainModeSchema,
  stacksApiUrl: v.string(),
  xverseApiUrl: v.string(),
});

export type StacksNetwork = v.InferOutput<typeof stacksNetworkSchema>;

export const starknetChainModeSchema = v.picklist(['mainnet', 'sepolia']);

export type StarknetNetworkMode = v.InferOutput<typeof starknetChainModeSchema>;

export const starknetNetworkSchema = v.object({
  chain: v.literal('starknet'),
  ...commonNetworkSchema.entries,
  mode: starknetChainModeSchema,
  rpcApiUrl: v.string(),
  xverseApiUrl: v.string(),
});

export type StarknetNetwork = v.InferOutput<typeof starknetNetworkSchema>;

export const NetworkSchema = v.variant('chain', [
  bitcoinNetworkSchema,
  sparkNetworkSchema,
  stacksNetworkSchema,
  starknetNetworkSchema,
]);

export type Network = v.InferOutput<typeof NetworkSchema>;

export type Chain = Network['chain'];

export type ActiveNetworks = ExactObject<
  Chain,
  {
    bitcoin: BitcoinNetwork;
    spark: SparkNetwork;
    stacks: StacksNetwork;
    starknet: StarknetNetwork;
  }
>;
