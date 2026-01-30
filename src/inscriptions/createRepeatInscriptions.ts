import type { Json } from 'jsontokens';
import { createUnsecuredToken } from 'jsontokens';
import { getProviderOrThrow } from '../provider';
import type { CreateRepeatInscriptionsOptions } from './types';
import { validateInscriptionPayload } from './utils';

export const createRepeatInscriptions = async (options: CreateRepeatInscriptionsOptions) => {
  const { getProvider } = options;
  const provider = await getProviderOrThrow(getProvider);

  validateInscriptionPayload(options.payload);

  try {
    const request = createUnsecuredToken(options.payload as unknown as Json);
    const response = await provider.createRepeatInscriptions(request);
    options.onFinish?.(response);
  } catch (error) {
    console.error('[Connect] Error during create repeat inscriptions', error);
    options.onCancel?.();
  }
};
