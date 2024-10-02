import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';
import { walletTypeSchema } from './common';
import { permissions } from '@secretkeylabs/xverse-core';
import { addressSchema } from 'src/addresses';

/**
 * Permissions with the clientId field omitted. Used for permission requests,
 * since the wallet performs authentication based on the client's tab origin and
 * should not rely on the client authenticating themselves.
 */
export const permissionsWithoutClientId = v.array(
  v.variant('type', [
    v.omit(permissions.resources.account.accountPermissionSchema, ['clientId']),
    v.omit(permissions.resources.wallet.walletPermissionSchema, ['clientId']),
  ])
);

export const requestPermissionsMethodName = 'wallet_requestPermissions';
export const requestPermissionsParamsSchema = v.nullish(permissionsWithoutClientId);
export const requestPermissionsResultSchema = v.literal(true);
export const requestPermissionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(requestPermissionsMethodName),
    params: requestPermissionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type RequestPermissions = MethodParamsAndResult<
  v.InferOutput<typeof requestPermissionsParamsSchema>,
  v.InferOutput<typeof requestPermissionsResultSchema>
>;

// Note: This method behaves identically to `wallet_disconnect` when no
// parameters are provided, and completely removes all of the client's
// permissions. Currently, no parameters are supported since there currently
// isn't a usecase for renouncing individual permissions, but serves as a
// placeholder should the need arise.
export const renouncePermissionsMethodName = 'wallet_renouncePermissions';
export const renouncePermissionsParamsSchema = v.nullish(v.null());
export const renouncePermissionsResultSchema = v.nullish(v.null());
export const renouncePermissionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(renouncePermissionsMethodName),
    params: renouncePermissionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type RenouncePermissions = MethodParamsAndResult<
  v.InferOutput<typeof renouncePermissionsParamsSchema>,
  v.InferOutput<typeof renouncePermissionsResultSchema>
>;

export const disconnectMethodName = 'wallet_disconnect';
export const disconnectParamsSchema = v.nullish(v.null());
export const disconnectResultSchema = v.nullish(v.null());
export const disconnectRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(disconnectMethodName),
    params: disconnectParamsSchema,
    id: v.string(),
  }).entries,
});
export type Disconnect = MethodParamsAndResult<
  v.InferOutput<typeof disconnectParamsSchema>,
  v.InferOutput<typeof disconnectResultSchema>
>;

export const getWalletTypeMethodName = 'wallet_getWalletType';
export const getWalletTypeParamsSchema = v.nullish(v.null());
export const getWalletTypeResultSchema = walletTypeSchema;
export const getWalletTypeRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getWalletTypeMethodName),
    params: getWalletTypeParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetWalletType = MethodParamsAndResult<
  v.InferOutput<typeof getWalletTypeParamsSchema>,
  v.InferOutput<typeof getWalletTypeResultSchema>
>;

export const getCurrentPermissionsMethodName = 'wallet_getCurrentPermissions';
export const getCurrentPermissionsParamsSchema = v.nullish(v.null());
export const getCurrentPermissionsResultSchema = v.array(permissions.store.permission);
export const getCurrentPermissionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getCurrentPermissionsMethodName),
    params: getCurrentPermissionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetCurrentPermissions = MethodParamsAndResult<
  v.InferOutput<typeof getCurrentPermissionsParamsSchema>,
  v.InferOutput<typeof getCurrentPermissionsResultSchema>
>;

export const getAccountMethodName = 'wallet_getAccount';
export const getAccountParamsSchema = v.nullish(v.null());
export const getAccountResultSchema = v.object({
  id: permissions.utils.account.accountIdSchema,
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
});
export const getAccountRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getAccountMethodName),
    params: getAccountParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetAccount = MethodParamsAndResult<
  v.InferOutput<typeof getAccountParamsSchema>,
  v.InferOutput<typeof getAccountResultSchema>
>;

export const registerClientMethodName = 'wallet_registerClient';
export const registerClientParamsSchema = v.object({
  name: v.optional(v.string()),
  description: v.optional(v.string()),
});
export const registerClientResultSchema = v.object({
  id: v.string(),
});
export const registerClientRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(registerClientMethodName),
    params: registerClientParamsSchema,
    id: v.string(),
  }).entries,
});
export type RegisterClient = MethodParamsAndResult<
  v.InferOutput<typeof registerClientParamsSchema>,
  v.InferOutput<typeof registerClientResultSchema>
>;

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(permissionsWithoutClientId),
    clientInfo: registerClientParamsSchema,
  })
);
export const connectResultSchema = getAccountResultSchema;
export const connectRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(connectMethodName),
    params: connectParamsSchema,
    id: v.string(),
  }).entries,
});
export type Connect = MethodParamsAndResult<
  v.InferOutput<typeof connectParamsSchema>,
  v.InferOutput<typeof connectResultSchema>
>;
