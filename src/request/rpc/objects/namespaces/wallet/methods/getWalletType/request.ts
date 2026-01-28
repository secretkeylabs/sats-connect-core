import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetWalletTypeRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getWalletType,
});

export type WalletGetWalletTypeRequest = v.InferOutput<typeof walletGetWalletTypeRequestSchema>;
