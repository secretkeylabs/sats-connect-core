import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetAccountParamsSchema = v.nullish(v.null());

export type WalletGetAccountParams = v.InferOutput<typeof walletGetAccountParamsSchema>;

export const walletGetAccountRequestSchema = createRequestSchema({
  paramsSchema: walletGetAccountParamsSchema,
  method: walletMethods.wallet_getAccount,
});

export type WalletGetAccountRequest = v.InferOutput<typeof walletGetAccountRequestSchema>;
