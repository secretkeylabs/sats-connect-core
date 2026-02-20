import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletRenouncePermissionsResultSchema = v.nullish(v.null());

export type WalletRenouncePermissionsResult = v.InferOutput<
  typeof walletRenouncePermissionsResultSchema
>;

export const walletRenouncePermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletRenouncePermissionsResultSchema,
  method: walletMethods.wallet_renouncePermissions,
});

export type WalletRenouncePermissionsSuccessResponse = v.InferOutput<
  typeof walletRenouncePermissionsSuccessResponseSchema
>;
