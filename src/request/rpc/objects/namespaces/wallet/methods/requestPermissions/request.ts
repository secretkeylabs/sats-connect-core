import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const walletRequestPermissionsParamsSchema = v.nullish(
  v.array(permissionRequestParamsSchema)
);

export type WalletRequestPermissionsParams = v.InferOutput<
  typeof walletRequestPermissionsParamsSchema
>;

export const walletRequestPermissionsRequestSchema = createRequestSchema({
  paramsSchema: walletRequestPermissionsParamsSchema,
  method: walletMethods.wallet_requestPermissions,
});

export type WalletRequestPermissionsRequest = v.InferOutput<
  typeof walletRequestPermissionsRequestSchema
>;
