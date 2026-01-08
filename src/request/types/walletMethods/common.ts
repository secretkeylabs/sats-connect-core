import * as v from 'valibot';

// NOTE: These next 4 values are copied from xverse-core to avoid having it as a
// dependency. It has side effects and doesn't support tree-shaking, and would
// make sats-connect-core too heavy.

export const accountActionsSchema = v.object({
  read: v.optional(v.boolean()),
});

export const walletActionsSchema = v.object({
  readNetwork: v.optional(v.boolean()),
});

export const accountPermissionSchema = v.object({
  type: v.literal('account'),
  resourceId: v.string(),
  clientId: v.string(),
  actions: accountActionsSchema,
});

export const walletPermissionSchema = v.object({
  type: v.literal('wallet'),
  resourceId: v.string(),
  clientId: v.string(),
  actions: walletActionsSchema,
});

/**
 * Permissions with the clientId field omitted and optional actions. Used for
 * permission requests, since the wallet performs authentication based on the
 * client's tab origin and should not rely on the client authenticating
 * themselves.
 */
export const PermissionRequestParams = v.variant('type', [
  v.object({
    ...v.omit(accountPermissionSchema, ['clientId']).entries,
  }),
  v.object({
    ...v.omit(walletPermissionSchema, ['clientId']).entries,
  }),
]);

export const permission = v.variant('type', [accountPermissionSchema, walletPermissionSchema]);

export type PermissionWithoutClientId = v.InferOutput<typeof PermissionRequestParams>;
