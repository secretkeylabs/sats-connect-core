import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetWalletTypeSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.picklist(['software', 'ledger']),
  method: walletMethods.wallet_getWalletType,
});

export type WalletGetWalletTypeSuccessResponse = v.InferOutput<
  typeof walletGetWalletTypeSuccessResponseSchema
>;
