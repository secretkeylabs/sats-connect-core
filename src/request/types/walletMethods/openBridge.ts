import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const openBridgeMethodName = 'wallet_openBridge';
export const openBridgeParamsSchema = v.object({
  fromAsset: v.string(),
  toAsset: v.string(),
});
export type OpenBridgeParams = v.InferOutput<typeof openBridgeParamsSchema>;
export const openBridgeResultSchema = v.nullish(v.null());
export type OpenBridgeResult = v.InferOutput<typeof openBridgeResultSchema>;
export const openBridgeRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(openBridgeMethodName),
    params: openBridgeParamsSchema,
    id: v.string(),
  }).entries,
});
export type OpenBridgeRequestMessage = v.InferOutput<typeof openBridgeRequestMessageSchema>;
export type OpenBridge = MethodParamsAndResult<OpenBridgeParams, OpenBridgeResult>;
