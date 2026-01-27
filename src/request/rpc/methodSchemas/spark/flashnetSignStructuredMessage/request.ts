import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetSignStructuredMessageRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    message: v.string(),
  }),
  method: sparkMethods.spark_flashnet_signStructuredMessage,
});

export type SparkFlashnetSignStructuredMessageRequest = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageRequestSchema
>;
