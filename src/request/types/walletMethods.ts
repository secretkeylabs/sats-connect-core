import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';
import { walletTypeSchema } from './common';
import { permissions } from '@secretkeylabs/xverse-core';
import { addressSchema } from '../../addresses';

/**
 * Permissions with the clientId field omitted and optional actions. Used for
 * permission requests, since the wallet performs authentication based on the
 * client's tab origin and should not rely on the client authenticating
 * themselves.
 */
export const permissionTemplate = v.variant('type', [
  v.object({
    ...v.omit(permissions.resources.account.accountPermissionSchema, ['clientId']).entries,
  }),
  v.object({
    ...v.omit(permissions.resources.wallet.walletPermissionSchema, ['clientId']).entries,
  }),
]);
export type PermissionWithoutClientId = v.InferOutput<typeof permissionTemplate>;

export const requestPermissionsMethodName = 'wallet_requestPermissions';
export const requestPermissionsParamsSchema = v.nullish(v.array(permissionTemplate));
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
export const getCurrentPermissionsResultSchema = v.array(permissions.store.permission);
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
  id: permissions.utils.account.accountIdSchema,
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

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(permissionTemplate)),
  })
);
export type ConnectParams = v.InferOutput<typeof connectParamsSchema>;
export const connectResultSchema = getAccountResultSchema;
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
