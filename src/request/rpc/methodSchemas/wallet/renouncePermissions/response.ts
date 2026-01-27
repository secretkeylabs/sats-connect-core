import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletRenouncePermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_renouncePermissions,
});

export type WalletRenouncePermissionsSuccessResponse = v.InferOutput<
  typeof walletRenouncePermissionsSuccessResponseSchema
>;
