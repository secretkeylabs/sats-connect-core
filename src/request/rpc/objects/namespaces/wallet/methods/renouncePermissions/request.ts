import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletRenouncePermissionsRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_renouncePermissions,
});

export type WalletRenouncePermissionsRequest = v.InferOutput<
  typeof walletRenouncePermissionsRequestSchema
>;
