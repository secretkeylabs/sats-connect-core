import { XverseAdapter } from './xverse';
import { SatsConnectAdapter } from './satsConnectAdapter';
import { UnisatAdapter } from './unisat';

export const defaultAdapters: Record<string, new () => SatsConnectAdapter> = {
  'XverseProviders.BitcoinProvider': XverseAdapter,
  unisat: UnisatAdapter,
};

export * from './persistence';
export * from './satsConnectAdapter';
export * from './BaseAdapter';
