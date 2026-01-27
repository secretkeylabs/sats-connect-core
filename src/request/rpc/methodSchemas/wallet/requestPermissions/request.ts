import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

// Permission request schemas
const accountActionsSchema = v.object({
  read: v.optional(v.boolean()),
});

const walletActionsSchema = v.object({
  readNetwork: v.optional(v.boolean()),
});

const accountPermissionRequestSchema = v.object({
  type: v.literal('account'),
  resourceId: v.string(),
  actions: accountActionsSchema,
});

const walletPermissionRequestSchema = v.object({
  type: v.literal('wallet'),
  resourceId: v.string(),
  actions: walletActionsSchema,
});

const permissionRequestParamsSchema = v.variant('type', [
  accountPermissionRequestSchema,
  walletPermissionRequestSchema,
]);

export const walletRequestPermissionsRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.array(permissionRequestParamsSchema)),
  method: walletMethods.wallet_requestPermissions,
});

export type WalletRequestPermissionsRequest = v.InferOutput<
  typeof walletRequestPermissionsRequestSchema
>;
