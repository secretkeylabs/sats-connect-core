import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

const ed25519SignParamsSchema = v.object({
  algorithm: v.literal('Ed25519'),
  payload: v.pipe(v.string(), v.hexadecimal()),
});

const ed25519phSignParamsSchema = v.object({
  algorithm: v.literal('Ed25519ph'),
  payload: v.pipe(v.string(), v.hexadecimal()),
});

// Discriminated union — extensible for future algorithms
export const walletSignParamsSchema = v.variant('algorithm', [
  ed25519SignParamsSchema,
  ed25519phSignParamsSchema,
]);

export type WalletSignParams = v.InferOutput<typeof walletSignParamsSchema>;

export const walletSignRequestSchema = createRequestSchema({
  paramsSchema: walletSignParamsSchema,
  method: walletMethods.wallet_sign,
});

export type WalletSignRequest = v.InferOutput<typeof walletSignRequestSchema>;
