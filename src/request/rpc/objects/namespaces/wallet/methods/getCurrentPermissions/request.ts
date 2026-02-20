import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetCurrentPermissionsParamsSchema = v.nullish(v.null());

export type WalletGetCurrentPermissionsParams = v.InferOutput<
  typeof walletGetCurrentPermissionsParamsSchema
>;

export const walletGetCurrentPermissionsRequestSchema = createRequestSchema({
  paramsSchema: walletGetCurrentPermissionsParamsSchema,
  method: walletMethods.wallet_getCurrentPermissions,
});

export type WalletGetCurrentPermissionsRequest = v.InferOutput<
  typeof walletGetCurrentPermissionsRequestSchema
>;
