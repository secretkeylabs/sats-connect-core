import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletGetWalletTypeSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.picklist(['software', 'ledger']),
  method: walletMethods.wallet_getWalletType,
});

export type WalletGetWalletTypeSuccessResponse = v.InferOutput<
  typeof walletGetWalletTypeSuccessResponseSchema
>;
