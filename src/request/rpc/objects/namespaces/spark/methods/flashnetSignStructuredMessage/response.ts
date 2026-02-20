import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetSignStructuredMessageResultSchema = v.object({
  message: v.string(),
  signature: v.string(),
});

export type SparkFlashnetSignStructuredMessageResult = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageResultSchema
>;

export const sparkFlashnetSignStructuredMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkFlashnetSignStructuredMessageResultSchema,
  method: sparkMethods.spark_flashnet_signStructuredMessage,
});

export type SparkFlashnetSignStructuredMessageSuccessResponse = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageSuccessResponseSchema
>;
