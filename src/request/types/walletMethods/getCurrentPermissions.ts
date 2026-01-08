import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { permission } from './common';

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
