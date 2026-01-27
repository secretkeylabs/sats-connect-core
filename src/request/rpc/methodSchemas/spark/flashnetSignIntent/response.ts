import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetSignIntentSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The signed intent as a hex string.
     */
    signature: v.string(),
  }),
  method: sparkMethods.spark_flashnet_signIntent,
});

export type SparkFlashnetSignIntentSuccessResponse = v.InferOutput<
  typeof sparkFlashnetSignIntentSuccessResponseSchema
>;
