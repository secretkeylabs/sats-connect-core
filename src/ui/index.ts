import { DefaultAdaptersInfo } from '../adapters';
import { SupportedWallet } from '../provider';

export interface Config {
  providers: SupportedWallet[];
}

export function createDefaultConfig(providers: SupportedWallet[]): Config {
  const config: Config = { providers: [] };
  // Xverse
  const xverseProvider = providers.find(
    (provider) => provider.id === DefaultAdaptersInfo.xverse.id
  );
  config.providers.push(
    xverseProvider
      ? xverseProvider
      : {
          ...DefaultAdaptersInfo.xverse,
          isInstalled: false,
        }
  );

  // Unisat
  const unisatProvider = providers.find((provider) => provider.id === 'unisat');
  if (unisatProvider && unisatProvider.isInstalled) {
    config.providers.push(unisatProvider);
  }

  // Rest
  config.providers.concat(
    providers.filter((provider) => {
      return provider.id !== DefaultAdaptersInfo.xverse.id && provider.id !== 'unisat';
    })
  );

  return config;
}
