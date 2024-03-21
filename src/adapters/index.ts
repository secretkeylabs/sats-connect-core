import { SatsConnectAdapter } from './satsConnectAdapter';
import { UnisatAdapter } from './unisat';

export const defaultAdapters: Record<string, new () => SatsConnectAdapter> = {
  unisat: UnisatAdapter,
};

export * from './persistence';
export * from './satsConnectAdapter';
export * from './baseAdapter';
