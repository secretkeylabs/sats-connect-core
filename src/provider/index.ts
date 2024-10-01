import { DefaultAdaptersInfo } from '../adapters';
import { type BitcoinProvider, type Provider, type SupportedWallet } from './types';

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

export function setDefaultProvider(providerId: string) {
  localStorage.setItem('sats-connect_defaultProvider', providerId);
}

export function getDefaultProvider() {
  return localStorage.getItem('sats-connect_defaultProvider');
}

export function removeDefaultProvider() {
  localStorage.removeItem('sats-connect_defaultProvider');
}

export function getSupportedWallets(): SupportedWallet[] {
  const ambientProviders = getProviders();
  const { xverse, ...defaultProviders } = DefaultAdaptersInfo;

  const allProviders = [...ambientProviders, ...Object.values(defaultProviders)];

  const wallets: SupportedWallet[] = allProviders.map((provider) => {
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
