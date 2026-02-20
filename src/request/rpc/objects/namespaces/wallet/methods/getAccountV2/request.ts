import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetAccountV2ParamsSchema = v.nullish(v.null());

export type WalletGetAccountV2Params = v.InferOutput<typeof walletGetAccountV2ParamsSchema>;

export const walletGetAccountV2RequestSchema = createRequestSchema({
  paramsSchema: walletGetAccountV2ParamsSchema,
  method: walletMethods.wallet_getAccountV2,
});

export type WalletGetAccountV2Request = v.InferOutput<typeof walletGetAccountV2RequestSchema>;
