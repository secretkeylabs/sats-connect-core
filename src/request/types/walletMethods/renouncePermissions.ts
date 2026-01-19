import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

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
