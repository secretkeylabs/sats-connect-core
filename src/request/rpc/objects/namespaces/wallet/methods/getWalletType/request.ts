import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetWalletTypeParamsSchema = v.nullish(v.null());

export type WalletGetWalletTypeParams = v.InferOutput<typeof walletGetWalletTypeParamsSchema>;

export const walletGetWalletTypeRequestSchema = createRequestSchema({
  paramsSchema: walletGetWalletTypeParamsSchema,
  method: walletMethods.wallet_getWalletType,
});

export type WalletGetWalletTypeRequest = v.InferOutput<typeof walletGetWalletTypeRequestSchema>;
