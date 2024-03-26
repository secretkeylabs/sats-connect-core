import { DefaultAdaptersInfo } from '../adapters';
import { type SupportedWallet, type BitcoinProvider, type Provider } from './types';

export async function getProviderOrThrow(
  getProvider?: () => Promise<BitcoinProvider | undefined>
): Promise<BitcoinProvider> {
  const provider =
    (await getProvider?.()) || window.XverseProviders?.BitcoinProvider || window.BitcoinProvider;

  if (!provider) {
    throw new Error('No Bitcoin wallet installed');
  }

  return provider;
}

export function getProviders(): Provider[] {
  if (!window.btc_providers) window.btc_providers = [];
  return window.btc_providers;
}

export function getProviderById(providerId: string) {
  return providerId?.split('.').reduce((acc: any, part) => acc?.[part], window);
}

export function isProviderInstalled(providerId: string) {
  return !!getProviderById(providerId);
}

export function getSupportedWallets(): SupportedWallet[] {
  const btc_providers = getProviders();
  for (let key in DefaultAdaptersInfo) {
    btc_providers.push(DefaultAdaptersInfo[key]);
  }
  const wallets: SupportedWallet[] = btc_providers.map((provider) => {
    {
      return {
        ...provider,
        isInstalled: isProviderInstalled(provider.id),
      };
    }
  });
  return wallets;
}

export * from './types';
