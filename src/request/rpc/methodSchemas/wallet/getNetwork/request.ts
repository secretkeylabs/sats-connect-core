import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletGetNetworkRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getNetwork,
});

export type WalletGetNetworkRequest = v.InferOutput<typeof walletGetNetworkRequestSchema>;
