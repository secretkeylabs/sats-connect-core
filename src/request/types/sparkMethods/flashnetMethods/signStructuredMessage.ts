import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetSignStructuredMessageMethodName = 'spark_flashnet_signStructuredMessage';

export const sparkFlashnetSignStructuredMessageParamsSchema = v.object({
  message: v.string(),
});
export type SparkFlashnetSignStructuredMessageParams = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageParamsSchema
>;

export const sparkFlashnetSignStructuredMessageResultSchema = v.object({
  message: v.string(),
  signature: v.string(),
});
export type SparkFlashnetSignStructuredMessageResult = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageResultSchema
>;

export const sparkFlashnetSignStructuredMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetSignStructuredMessageMethodName),
    params: sparkFlashnetSignStructuredMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetSignStructuredMessageRequestMessage = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageRequestMessageSchema
>;

export type SparkFlashnetSignStructuredMessage = MethodParamsAndResult<
  SparkFlashnetSignStructuredMessageParams,
  SparkFlashnetSignStructuredMessageResult
>;
