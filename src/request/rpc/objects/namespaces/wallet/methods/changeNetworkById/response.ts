import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletChangeNetworkByIdSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_changeNetworkById,
});

export type WalletChangeNetworkByIdSuccessResponse = v.InferOutput<
  typeof walletChangeNetworkByIdSuccessResponseSchema
>;
