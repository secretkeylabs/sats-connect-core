import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetSignIntentResultSchema = v.object({
  /**
   * The signed intent as a hex string.
   */
  signature: v.string(),
});

export type SparkFlashnetSignIntentResult = v.InferOutput<
  typeof sparkFlashnetSignIntentResultSchema
>;

export const sparkFlashnetSignIntentSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkFlashnetSignIntentResultSchema,
  method: sparkMethods.spark_flashnet_signIntent,
});

export type SparkFlashnetSignIntentSuccessResponse = v.InferOutput<
  typeof sparkFlashnetSignIntentSuccessResponseSchema
>;
