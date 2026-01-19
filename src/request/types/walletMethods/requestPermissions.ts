import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { PermissionRequestParams } from './common';

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
