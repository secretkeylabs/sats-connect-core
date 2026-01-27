import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetClawbackFundsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    requestId: v.string(),
    accepted: v.boolean(),
    internalRequestId: v.optional(v.string()),
    sparkStatusTrackingId: v.optional(v.string()),
    error: v.optional(v.string()),
  }),
  method: sparkMethods.spark_flashnet_clawbackFunds,
});

export type SparkFlashnetClawbackFundsSuccessResponse = v.InferOutput<
  typeof sparkFlashnetClawbackFundsSuccessResponseSchema
>;
