import type { Json } from 'jsontokens';
import { createUnsecuredToken } from 'jsontokens';

import { getProviderOrThrow } from '../provider';
import { CreateInscriptionOptions, CreateInscriptionPayload } from './types';
import { validateInscriptionPayload } from './utils';

export const createInscription = async (options: CreateInscriptionOptions) => {
  const { getProvider } = options;
  const provider = await getProviderOrThrow(getProvider);

  validateInscriptionPayload(options.payload);

  try {
    const request = createUnsecuredToken(options.payload as unknown as Json);
    const response = await provider.createInscription(request);
    options.onFinish?.(response);
  } catch (error) {
    console.error('[Connect] Error during create inscription', error);
    options.onCancel?.();
  }
};
