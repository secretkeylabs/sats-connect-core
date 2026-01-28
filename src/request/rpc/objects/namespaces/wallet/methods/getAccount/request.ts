import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetAccountRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getAccount,
});

export type WalletGetAccountRequest = v.InferOutput<typeof walletGetAccountRequestSchema>;
