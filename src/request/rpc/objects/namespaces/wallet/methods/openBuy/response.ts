import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletOpenBuySuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_openBuy,
});

export type WalletOpenBuySuccessResponse = v.InferOutput<typeof walletOpenBuySuccessResponseSchema>;
