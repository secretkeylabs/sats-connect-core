import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletOpenBuySuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_openBuy,
});

export type WalletOpenBuySuccessResponse = v.InferOutput<typeof walletOpenBuySuccessResponseSchema>;
