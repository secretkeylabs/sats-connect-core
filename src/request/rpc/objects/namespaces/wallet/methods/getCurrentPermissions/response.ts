import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

const accountActionsSchema = v.object({
  read: v.optional(v.boolean()),
});

const walletActionsSchema = v.object({
  readNetwork: v.optional(v.boolean()),
});

const accountPermissionSchema = v.object({
  type: v.literal('account'),
  resourceId: v.string(),
  clientId: v.string(),
  actions: accountActionsSchema,
});

const walletPermissionSchema = v.object({
  type: v.literal('wallet'),
  resourceId: v.string(),
  clientId: v.string(),
  actions: walletActionsSchema,
});

const permissionSchema = v.variant('type', [accountPermissionSchema, walletPermissionSchema]);

export const walletGetCurrentPermissionsResultSchema = v.array(permissionSchema);

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
