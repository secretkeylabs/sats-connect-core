import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { permission } from '../../shared/permissions';

export const walletGetCurrentPermissionsResultSchema = permission;

export type WalletGetCurrentPermissionsResult = v.InferOutput<
  typeof walletGetCurrentPermissionsResultSchema
>;

export const walletGetCurrentPermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetCurrentPermissionsResultSchema,
  method: walletMethods.wallet_getCurrentPermissions,
});

export type WalletGetCurrentPermissionsSuccessResponse = v.InferOutput<
  typeof walletGetCurrentPermissionsSuccessResponseSchema
>;
