import * as v from 'valibot';
import { AddressPurpose, addressSchema } from '../../addresses';
import {
  BitcoinNetworkType,
  MethodParamsAndResult,
  rpcRequestMessageSchema,
  StacksNetworkType,
  StarknetNetworkType,
} from '../../types';
import { walletTypeSchema } from './common';

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

export const getNetworkMethodName = 'wallet_getNetwork';
export const getNetworkParamsSchema = v.nullish(v.null());
export type GetNetworkParams = v.InferOutput<typeof getNetworkParamsSchema>;
export const getNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.enum(BitcoinNetworkType),
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

export const changeNetworkMethodName = 'wallet_changeNetwork';
export const changeNetworkParamsSchema = v.object({
  name: v.enum(BitcoinNetworkType),
});
export type ChangeNetworkParams = v.InferOutput<typeof changeNetworkParamsSchema>;
export const changeNetworkResultSchema = v.nullish(v.null());
export type ChangeNetworkResult = v.InferOutput<typeof changeNetworkResultSchema>;
export const changeNetworkRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(changeNetworkMethodName),
    params: changeNetworkParamsSchema,
    id: v.string(),
  }).entries,
});
export type ChangeNetworkRequestMessage = v.InferOutput<typeof changeNetworkRequestMessageSchema>;
export type ChangeNetwork = MethodParamsAndResult<ChangeNetworkParams, ChangeNetworkResult>;

export const changeNetworkByIdMethodName = 'wallet_changeNetworkById';
export const changeNetworkByIdParamsSchema = v.object({
  id: v.string(),
});
export type ChangeNetworkByIdParams = v.InferOutput<typeof changeNetworkByIdParamsSchema>;
export const changeNetworkByIdResultSchema = v.nullish(v.null());
export type ChangeNetworkByIdResult = v.InferOutput<typeof changeNetworkByIdResultSchema>;
export const changeNetworkByIdRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(changeNetworkByIdMethodName),
    params: changeNetworkByIdParamsSchema,
    id: v.string(),
  }).entries,
});
export type ChangeNetworkByIdRequestMessage = v.InferOutput<
  typeof changeNetworkByIdRequestMessageSchema
>;
export type ChangeNetworkById = MethodParamsAndResult<
  ChangeNetworkByIdParams,
  ChangeNetworkByIdResult
>;

export const getAccountMethodName = 'wallet_getAccount';
export const getAccountParamsSchema = v.nullish(v.null());
export type GetAccountParams = v.InferOutput<typeof getAccountParamsSchema>;
export const getAccountResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: getNetworkResultSchema,
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

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(PermissionRequestParams)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
    network: v.optional(v.enum(BitcoinNetworkType)),
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

export const addNetworkMethodName = 'wallet_addNetwork';
export const addNetworkParamsSchema = v.variant('chain', [
  v.object({
    chain: v.literal('bitcoin'),
    type: v.enum(BitcoinNetworkType),
    name: v.string(),
    rpcUrl: v.string(),
    rpcFallbackUrl: v.optional(v.string()),
    indexerUrl: v.optional(v.string()),
    blockExplorerUrl: v.optional(v.string()),

    switch: v.optional(v.boolean()),
  }),
  v.object({
    chain: v.literal('stacks'),
    name: v.string(),
    type: v.enum(StacksNetworkType),
    rpcUrl: v.string(),
    blockExplorerUrl: v.optional(v.string()),

    switch: v.optional(v.boolean()),
  }),
  v.object({
    chain: v.literal('starknet'),
    name: v.string(),
    type: v.enum(StarknetNetworkType),
    rpcUrl: v.string(),
    blockExplorerUrl: v.optional(v.string()),

    switch: v.optional(v.boolean()),
  }),
]);
export type AddNetworkParams = v.InferOutput<typeof addNetworkParamsSchema>;
export const addNetworkRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(addNetworkMethodName),
    params: addNetworkParamsSchema,
    id: v.string(),
  }).entries,
});
export type AddNetworkRequestMessage = v.InferOutput<typeof addNetworkRequestMessageSchema>;
export const addNetworkResultSchema = v.object({
  id: v.string(),
});
export type AddNetworkResult = v.InferOutput<typeof addNetworkResultSchema>;
export type AddNetwork = MethodParamsAndResult<AddNetworkParams, AddNetworkResult>;
