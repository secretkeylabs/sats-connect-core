import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetNetworkRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getNetwork,
});

export type WalletGetNetworkRequest = v.InferOutput<typeof walletGetNetworkRequestSchema>;
