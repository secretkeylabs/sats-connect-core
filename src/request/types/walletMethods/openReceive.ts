import * as v from 'valibot';
import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const openReceiveMethodName = 'wallet_openReceive';
export const openReceiveParamsSchema = v.object({
  address: v.string(),
});
export type OpenReceiveParams = v.InferOutput<typeof openReceiveParamsSchema>;
export const openReceiveResultSchema = addressSchema;
export type OpenReceiveResult = v.InferOutput<typeof openReceiveResultSchema>;
export const openReceiveRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(openReceiveMethodName),
    params: openReceiveParamsSchema,
    id: v.string(),
  }).entries,
});
export type OpenReceiveRequestMessage = v.InferOutput<typeof openReceiveRequestMessageSchema>;
export type OpenReceive = MethodParamsAndResult<OpenReceiveParams, OpenReceiveResult>;
