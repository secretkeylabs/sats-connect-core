import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletRenouncePermissionsRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_renouncePermissions,
});

export type WalletRenouncePermissionsRequest = v.InferOutput<
  typeof walletRenouncePermissionsRequestSchema
>;
