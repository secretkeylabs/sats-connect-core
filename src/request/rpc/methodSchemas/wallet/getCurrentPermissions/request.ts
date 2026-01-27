import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletGetCurrentPermissionsRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getCurrentPermissions,
});

export type WalletGetCurrentPermissionsRequest = v.InferOutput<
  typeof walletGetCurrentPermissionsRequestSchema
>;
