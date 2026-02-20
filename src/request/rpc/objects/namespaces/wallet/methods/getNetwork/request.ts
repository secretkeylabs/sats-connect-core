import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetNetworkParamsSchema = v.nullish(v.null());

export type WalletGetNetworkParams = v.InferOutput<typeof walletGetNetworkParamsSchema>;

export const walletGetNetworkRequestSchema = createRequestSchema({
  paramsSchema: walletGetNetworkParamsSchema,
  method: walletMethods.wallet_getNetwork,
});

export type WalletGetNetworkRequest = v.InferOutput<typeof walletGetNetworkRequestSchema>;
