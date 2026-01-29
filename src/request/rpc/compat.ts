import { BitcoinNetworkType, SparkNetworkType, StacksNetworkType } from 'src/types';
import { match } from 'ts-pattern';
import {
  BitcoinNetworkConfigurationChainMode,
  SparkNetworkConfigurationChainMode,
  StacksNetworkConfigurationChainMode,
} from './objects/namespaces/wallet/shared/networks';

export function bitcoinModeToLegacyBitcoinNetworkType(
  mode: BitcoinNetworkConfigurationChainMode
): BitcoinNetworkType {
  return match(mode)
    .with('mainnet', () => BitcoinNetworkType.Mainnet)
    .with('testnet', () => BitcoinNetworkType.Testnet)
    .with('regtest', () => BitcoinNetworkType.Regtest)
    .with('signet', () => BitcoinNetworkType.Signet)
    .with('testnet4', () => BitcoinNetworkType.Testnet4)
    .exhaustive();
}

export function stacksModeToLegacyStacksNetworkType(
  mode: StacksNetworkConfigurationChainMode
): StacksNetworkType {
  return match(mode)
    .with('mainnet', () => StacksNetworkType.Mainnet)
    .with('testnet', () => StacksNetworkType.Testnet)
    .otherwise(() => StacksNetworkType.Testnet);
}

export function sparkModeToLegacySparkNetworkType(
  mode: SparkNetworkConfigurationChainMode
): SparkNetworkType {
  return match(mode)
    .with('mainnet', () => SparkNetworkType.Mainnet)
    .with('regtest', () => SparkNetworkType.Regtest)
    .exhaustive();
}
