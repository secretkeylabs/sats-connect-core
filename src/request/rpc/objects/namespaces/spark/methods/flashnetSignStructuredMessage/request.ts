import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetSignStructuredMessageParamsSchema = v.object({
  message: v.string(),
});

export type SparkFlashnetSignStructuredMessageParams = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageParamsSchema
>;

export const sparkFlashnetSignStructuredMessageRequestSchema = createRequestSchema({
  paramsSchema: sparkFlashnetSignStructuredMessageParamsSchema,
  method: sparkMethods.spark_flashnet_signStructuredMessage,
});

export type SparkFlashnetSignStructuredMessageRequest = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageRequestSchema
>;
