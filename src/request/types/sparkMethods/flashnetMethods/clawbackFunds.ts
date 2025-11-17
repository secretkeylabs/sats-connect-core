import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetClawbackFundsMethodName = 'spark_flashnet_clawbackFunds';

export const sparkFlashnetClawbackFundsParamsSchema = v.object({
  sparkTransferId: v.string(),
  lpIdentityPublicKey: v.string(),
});
export type SparkFlashnetClawbackFundsParams = v.InferOutput<
  typeof sparkFlashnetClawbackFundsParamsSchema
>;

export const sparkFlashnetClawbackFundsResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  internalRequestId: v.optional(v.string()),
  sparkStatusTrackingId: v.optional(v.string()),
  error: v.optional(v.string()),
});
export type SparkFlashnetClawbackFundsResult = v.InferOutput<
  typeof sparkFlashnetClawbackFundsResultSchema
>;

export const sparkFlashnetClawbackFundsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetClawbackFundsMethodName),
    params: sparkFlashnetClawbackFundsParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetClawbackFundsRequestMessage = v.InferOutput<
  typeof sparkFlashnetClawbackFundsRequestMessageSchema
>;

export type SparkFlashnetClawbackFunds = MethodParamsAndResult<
  SparkFlashnetClawbackFundsParams,
  SparkFlashnetClawbackFundsResult
>;
