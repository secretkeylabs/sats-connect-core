import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenBuyResultSchema = v.nullish(v.null());

export type WalletOpenBuyResult = v.InferOutput<typeof walletOpenBuyResultSchema>;

export const walletOpenBuySuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletOpenBuyResultSchema,
  method: walletMethods.wallet_openBuy,
});

export type WalletOpenBuySuccessResponse = v.InferOutput<typeof walletOpenBuySuccessResponseSchema>;
