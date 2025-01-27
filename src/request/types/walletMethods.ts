import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';
import { networkType, walletTypeSchema } from './common';
import { AddressPurpose, addressSchema } from '../../addresses';

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

export const requestPermissionsMethodName = 'wallet_requestPermissions';
export const requestPermissionsParamsSchema = v.nullish(v.array(PermissionRequestParams));
export type RequestPermissionsParams = v.InferOutput<typeof requestPermissionsParamsSchema>;
export const requestPermissionsResultSchema = v.literal(true);
export type RequestPermissionsResult = v.InferOutput<typeof requestPermissionsResultSchema>;
export const requestPermissionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(requestPermissionsMethodName),
    params: requestPermissionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type RequestPermissionsRequestMessage = v.InferOutput<
  typeof requestPermissionsRequestMessageSchema
>;
export type RequestPermissions = MethodParamsAndResult<
  RequestPermissionsParams,
  RequestPermissionsResult
>;

// Note: This method behaves identically to `wallet_disconnect` when no
// parameters are provided, and completely removes all of the client's
// permissions. Currently, no parameters are supported since there currently
// isn't a usecase for renouncing individual permissions, but serves as a
// placeholder should the need arise.
export const renouncePermissionsMethodName = 'wallet_renouncePermissions';
export const renouncePermissionsParamsSchema = v.nullish(v.null());
export type RenouncePermissionsParams = v.InferOutput<typeof renouncePermissionsParamsSchema>;
export const renouncePermissionsResultSchema = v.nullish(v.null());
export type RenouncePermissionsResult = v.InferOutput<typeof renouncePermissionsResultSchema>;
export const renouncePermissionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(renouncePermissionsMethodName),
    params: renouncePermissionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type RenouncePermissionsRequestMessage = v.InferOutput<
  typeof renouncePermissionsRequestMessageSchema
>;
export type RenouncePermissions = MethodParamsAndResult<
  RenouncePermissionsParams,
  RenouncePermissionsResult
>;

export const disconnectMethodName = 'wallet_disconnect';
export const disconnectParamsSchema = v.nullish(v.null());
export type DisconnectParams = v.InferOutput<typeof disconnectParamsSchema>;
export const disconnectResultSchema = v.nullish(v.null());
export type DisconnectResult = v.InferOutput<typeof disconnectResultSchema>;
export const disconnectRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(disconnectMethodName),
    params: disconnectParamsSchema,
    id: v.string(),
  }).entries,
});
export type DisconnectRequestMessage = v.InferOutput<typeof disconnectRequestMessageSchema>;
export type Disconnect = MethodParamsAndResult<DisconnectParams, DisconnectResult>;

export const getWalletTypeMethodName = 'wallet_getWalletType';
export const getWalletTypeParamsSchema = v.nullish(v.null());
export type GetWalletTypeParams = v.InferOutput<typeof getWalletTypeParamsSchema>;
export const getWalletTypeResultSchema = walletTypeSchema;
export type GetWalletTypeResult = v.InferOutput<typeof getWalletTypeResultSchema>;
export const getWalletTypeRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getWalletTypeMethodName),
    params: getWalletTypeParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetWalletTypeRequestMessage = v.InferOutput<typeof getWalletTypeRequestMessageSchema>;
export type GetWalletType = MethodParamsAndResult<GetWalletTypeParams, GetWalletTypeResult>;

export const getCurrentPermissionsMethodName = 'wallet_getCurrentPermissions';
export const getCurrentPermissionsParamsSchema = v.nullish(v.null());
export type GetCurrentPermissionsParams = v.InferOutput<typeof getCurrentPermissionsParamsSchema>;
export const getCurrentPermissionsResultSchema = v.array(permission);
export type GetCurrentPermissionsResult = v.InferOutput<typeof getCurrentPermissionsResultSchema>;
export const getCurrentPermissionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getCurrentPermissionsMethodName),
    params: getCurrentPermissionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetCurrentPermissionsRequestMessage = v.InferOutput<
  typeof getCurrentPermissionsRequestMessageSchema
>;
export type GetCurrentPermissions = MethodParamsAndResult<
  GetCurrentPermissionsParams,
  GetCurrentPermissionsResult
>;

export const getAccountMethodName = 'wallet_getAccount';
export const getAccountParamsSchema = v.nullish(v.null());
export type GetAccountParams = v.InferOutput<typeof getAccountParamsSchema>;
export const getAccountResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
});
export type GetAccountResult = v.InferOutput<typeof getAccountResultSchema>;
export const getAccountRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getAccountMethodName),
    params: getAccountParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetAccountRequestMessage = v.InferOutput<typeof getAccountRequestMessageSchema>;
export type GetAccount = MethodParamsAndResult<GetAccountParams, GetAccountResult>;

export const getNetworkMethodName = 'wallet_getNetwork';
export const getNetworkParamsSchema = v.nullish(v.null());
export type GetNetworkParams = v.InferOutput<typeof getNetworkParamsSchema>;
export const getNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.picklist(networkType),
  }),
  stacks: v.object({
    name: v.string(),
  }),
});
export type GetNetworkResult = v.InferOutput<typeof getNetworkResultSchema>;
export const getNetworkRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getNetworkMethodName),
    params: getNetworkParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetNetworkRequestMessage = v.InferOutput<typeof getNetworkRequestMessageSchema>;
export type GetNetwork = MethodParamsAndResult<GetNetworkParams, GetNetworkResult>;

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(PermissionRequestParams)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
  })
);
export type ConnectParams = v.InferOutput<typeof connectParamsSchema>;
export const connectResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: getNetworkResultSchema,
});
export type ConnectResult = v.InferOutput<typeof connectResultSchema>;
export const connectRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(connectMethodName),
    params: connectParamsSchema,
    id: v.string(),
  }).entries,
});
export type ConnectRequestMessage = v.InferOutput<typeof connectRequestMessageSchema>;
export type Connect = MethodParamsAndResult<ConnectParams, ConnectResult>;
