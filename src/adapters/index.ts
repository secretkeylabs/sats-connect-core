import { SatsConnectAdapter } from './satsConnectAdapter';
import { UnisatAdapter } from './unisat';

export const defaultAdapters: Record<string, SatsConnectAdapter> = {
  unisat: new UnisatAdapter(),
};
