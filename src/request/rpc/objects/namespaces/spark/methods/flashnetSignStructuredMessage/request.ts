import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkFlashnetSignStructuredMessageRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    message: v.string(),
  }),
  method: sparkMethods.spark_flashnet_signStructuredMessage,
});

export type SparkFlashnetSignStructuredMessageRequest = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageRequestSchema
>;
