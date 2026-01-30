import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { walletTypeSchema } from 'src/request/rpc/objects/shared';
import type * as v from 'valibot';

export const walletGetWalletTypeResultSchema = walletTypeSchema;

export type WalletGetWalletTypeResult = v.InferOutput<typeof walletGetWalletTypeResultSchema>;

export const walletGetWalletTypeSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetWalletTypeResultSchema,
  method: walletMethods.wallet_getWalletType,
});

export type WalletGetWalletTypeSuccessResponse = v.InferOutput<
  typeof walletGetWalletTypeSuccessResponseSchema
>;
