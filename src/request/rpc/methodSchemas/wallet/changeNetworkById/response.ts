import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletChangeNetworkByIdSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_changeNetworkById,
});

export type WalletChangeNetworkByIdSuccessResponse = v.InferOutput<
  typeof walletChangeNetworkByIdSuccessResponseSchema
>;
