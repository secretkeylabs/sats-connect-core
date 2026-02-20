import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetNetworksParamsSchema = v.nullish(v.null());

export type WalletGetNetworksParams = v.InferOutput<typeof walletGetNetworksParamsSchema>;

export const walletGetNetworksRequestSchema = createRequestSchema({
  paramsSchema: walletGetNetworksParamsSchema,
  method: walletMethods.wallet_getNetworks,
});

export type WalletGetNetworksRequest = v.InferOutput<typeof walletGetNetworksRequestSchema>;
