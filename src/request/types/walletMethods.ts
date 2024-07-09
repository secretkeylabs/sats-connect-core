import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';
import { walletTypeSchema } from './common';

export const requestPermissionsMethodName = 'wallet_requestPermissions';
export const requestPermissionsParamsSchema = v.undefined();
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

export const renouncePermissionsMethodName = 'wallet_renouncePermissions';
export const renouncePermissionsParamsSchema = v.undefined();
export const renouncePermissionsResultSchema = v.literal(true);
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

export const getWalletTypeMethodName = 'wallet_getWalletType';
export const getWalletTypeParamsSchema = v.nullish(v.null());
export const getWalletTypeResultSchema = walletTypeSchema;
export const getWalletTypeRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getWalletTypeMethodName),
    id: v.string(),
  }).entries,
});
export type GetWalletType = MethodParamsAndResult<
  v.InferOutput<typeof getWalletTypeParamsSchema>,
  v.InferOutput<typeof getWalletTypeResultSchema>
>;
