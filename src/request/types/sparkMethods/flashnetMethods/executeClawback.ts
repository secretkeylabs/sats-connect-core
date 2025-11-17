import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetExecuteClawbackMethodName = 'spark_flashnet_executeClawback';

export const sparkFlashnetExecuteClawbackParamsSchema = v.object({
  sparkTransferId: v.string(),
  lpIdentityPublicKey: v.string(),
});
export type SparkFlashnetExecuteClawbackParams = v.InferOutput<
  typeof sparkFlashnetExecuteClawbackParamsSchema
>;

export const sparkFlashnetExecuteClawbackResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  internalRequestId: v.optional(v.string()),
  sparkStatusTrackingId: v.optional(v.string()),
  error: v.optional(v.string()),
});
export type SparkFlashnetExecuteClawbackResult = v.InferOutput<
  typeof sparkFlashnetExecuteClawbackResultSchema
>;

export const sparkFlashnetExecuteClawbackRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetExecuteClawbackMethodName),
    params: sparkFlashnetExecuteClawbackParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetExecuteClawbackRequestMessage = v.InferOutput<
  typeof sparkFlashnetExecuteClawbackRequestMessageSchema
>;

export type SparkFlashnetExecuteClawback = MethodParamsAndResult<
  SparkFlashnetExecuteClawbackParams,
  SparkFlashnetExecuteClawbackResult
>;
