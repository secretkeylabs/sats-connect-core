import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenParamsSchema = v.object({
  path: v.optional(v.string()),
});

export type WalletOpenParams = v.InferOutput<typeof walletOpenParamsSchema>;

export const walletOpenRequestSchema = createRequestSchema({
  paramsSchema: walletOpenParamsSchema,
  method: walletMethods.wallet_open,
});

export type WalletOpenRequest = v.InferOutput<typeof walletOpenRequestSchema>;
