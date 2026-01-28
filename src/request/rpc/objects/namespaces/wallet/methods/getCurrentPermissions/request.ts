import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletGetCurrentPermissionsRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_getCurrentPermissions,
});

export type WalletGetCurrentPermissionsRequest = v.InferOutput<
  typeof walletGetCurrentPermissionsRequestSchema
>;
