import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetEdDsaPublicKeyResultSchema = v.object({
  publicKey: v.string(),
});

export type WalletGetEdDsaPublicKeyResult = v.InferOutput<
  typeof walletGetEdDsaPublicKeyResultSchema
>;

export const walletGetEdDsaPublicKeySuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetEdDsaPublicKeyResultSchema,
  method: walletMethods.wallet_getEdDsaPublicKey,
});

export type WalletGetEdDsaPublicKeySuccessResponse = v.InferOutput<
  typeof walletGetEdDsaPublicKeySuccessResponseSchema
>;
