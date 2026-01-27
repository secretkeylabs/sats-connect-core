import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletGetNetworksRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getNetworks,
});

export type WalletGetNetworksRequest = v.InferOutput<typeof walletGetNetworksRequestSchema>;
