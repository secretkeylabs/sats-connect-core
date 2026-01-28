import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletRenouncePermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_renouncePermissions,
});

export type WalletRenouncePermissionsSuccessResponse = v.InferOutput<
  typeof walletRenouncePermissionsSuccessResponseSchema
>;
