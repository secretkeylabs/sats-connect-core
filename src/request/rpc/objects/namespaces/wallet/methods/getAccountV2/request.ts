import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetAccountV2RequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getAccountV2,
});

export type WalletGetAccountV2Request = v.InferOutput<typeof walletGetAccountV2RequestSchema>;
