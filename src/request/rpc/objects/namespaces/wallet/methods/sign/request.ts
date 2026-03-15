import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

const edDsaSignParamsSchema = v.object({
  algorithm: v.literal('EdDSA'),
  payload: v.pipe(v.string(), v.hexadecimal()),
});

// Discriminated union — extensible for future algorithms
export const walletSignParamsSchema = v.variant('algorithm', [edDsaSignParamsSchema]);

export type WalletSignParams = v.InferOutput<typeof walletSignParamsSchema>;

export const walletSignRequestSchema = createRequestSchema({
  paramsSchema: walletSignParamsSchema,
  method: walletMethods.wallet_sign,
});

export type WalletSignRequest = v.InferOutput<typeof walletSignRequestSchema>;
