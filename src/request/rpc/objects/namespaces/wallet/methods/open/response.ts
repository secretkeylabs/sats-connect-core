import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenResultSchema = v.nullish(v.null());

export type WalletOpenResult = v.InferOutput<typeof walletOpenResultSchema>;

export const walletOpenSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletOpenResultSchema,
  method: walletMethods.wallet_open,
});

export type WalletOpenSuccessResponse = v.InferOutput<typeof walletOpenSuccessResponseSchema>;
