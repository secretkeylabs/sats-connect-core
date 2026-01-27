import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletGetWalletTypeRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getWalletType,
});

export type WalletGetWalletTypeRequest = v.InferOutput<typeof walletGetWalletTypeRequestSchema>;
