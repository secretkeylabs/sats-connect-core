import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetNetworksRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getNetworks,
});

export type WalletGetNetworksRequest = v.InferOutput<typeof walletGetNetworksRequestSchema>;
