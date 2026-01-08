import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

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
