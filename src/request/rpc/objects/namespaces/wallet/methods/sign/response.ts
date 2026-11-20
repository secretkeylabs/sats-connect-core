import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletSignResultSchema = v.object({
  signature: v.string(),
  publicKey: v.string(),
});

export type WalletSignResult = v.InferOutput<typeof walletSignResultSchema>;

export const walletSignSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletSignResultSchema,
  method: walletMethods.wallet_sign,
});

export type WalletSignSuccessResponse = v.InferOutput<typeof walletSignSuccessResponseSchema>;
