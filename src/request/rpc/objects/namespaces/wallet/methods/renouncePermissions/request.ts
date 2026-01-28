import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletRenouncePermissionsParamsSchema = v.nullish(v.null());

export type WalletRenouncePermissionsParams = v.InferOutput<
  typeof walletRenouncePermissionsParamsSchema
>;

export const walletRenouncePermissionsRequestSchema = createRequestSchema({
  paramsSchema: walletRenouncePermissionsParamsSchema,
  method: walletMethods.wallet_renouncePermissions,
});

export type WalletRenouncePermissionsRequest = v.InferOutput<
  typeof walletRenouncePermissionsRequestSchema
>;
