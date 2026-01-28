import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletChangeNetworkByIdParamsSchema = v.object({
  id: v.string(),
});

export type WalletChangeNetworkByIdParams = v.InferOutput<
  typeof walletChangeNetworkByIdParamsSchema
>;

export const walletChangeNetworkByIdRequestSchema = createRequestSchema({
  paramsSchema: walletChangeNetworkByIdParamsSchema,
  method: walletMethods.wallet_changeNetworkById,
});

export type WalletChangeNetworkByIdRequest = v.InferOutput<
  typeof walletChangeNetworkByIdRequestSchema
>;
