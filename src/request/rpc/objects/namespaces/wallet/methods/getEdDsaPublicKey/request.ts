import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetEdDsaPublicKeyParamsSchema = v.object({});

export type WalletGetEdDsaPublicKeyParams = v.InferOutput<
  typeof walletGetEdDsaPublicKeyParamsSchema
>;

export const walletGetEdDsaPublicKeyRequestSchema = createRequestSchema({
  paramsSchema: walletGetEdDsaPublicKeyParamsSchema,
  method: walletMethods.wallet_getEdDsaPublicKey,
});

export type WalletGetEdDsaPublicKeyRequest = v.InferOutput<
  typeof walletGetEdDsaPublicKeyRequestSchema
>;
