import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetExecuteClawBackMethodName = 'spark_flashnet_executeClawBack';

export const sparkFlashnetExecuteClawBackParamsSchema = v.object({
  sparkTransferId: v.string(),
  lpIdentityPublicKey: v.string(),
});
export type SparkFlashnetExecuteClawBackParams = v.InferOutput<
  typeof sparkFlashnetExecuteClawBackParamsSchema
>;

export const sparkFlashnetExecuteClawBackResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  internalRequestId: v.string(),
  sparkStatusTrackingId: v.string(),
});
export type SparkFlashnetExecuteClawBackResult = v.InferOutput<
  typeof sparkFlashnetExecuteClawBackResultSchema
>;

export const sparkFlashnetExecuteClawBackRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetExecuteClawBackMethodName),
    params: sparkFlashnetExecuteClawBackParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetExecuteClawBackRequestMessage = v.InferOutput<
  typeof sparkFlashnetExecuteClawBackRequestMessageSchema
>;

export type SparkFlashnetExecuteClawBack = MethodParamsAndResult<
  SparkFlashnetExecuteClawBackParams,
  SparkFlashnetExecuteClawBackResult
>;
