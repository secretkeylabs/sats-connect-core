import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkFlashnetSignStructuredMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    message: v.string(),
    signature: v.string(),
  }),
  method: sparkMethods.spark_flashnet_signStructuredMessage,
});

export type SparkFlashnetSignStructuredMessageSuccessResponse = v.InferOutput<
  typeof sparkFlashnetSignStructuredMessageSuccessResponseSchema
>;
