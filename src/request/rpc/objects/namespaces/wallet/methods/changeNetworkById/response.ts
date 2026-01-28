import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletChangeNetworkByIdResultSchema = v.nullish(v.null());

export type WalletChangeNetworkByIdResult = v.InferOutput<
  typeof walletChangeNetworkByIdResultSchema
>;

export const walletChangeNetworkByIdSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletChangeNetworkByIdResultSchema,
  method: walletMethods.wallet_changeNetworkById,
});

export type WalletChangeNetworkByIdSuccessResponse = v.InferOutput<
  typeof walletChangeNetworkByIdSuccessResponseSchema
>;
