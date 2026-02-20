import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const sparkFlashnetClawbackFundsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkFlashnetClawbackFundsResultSchema,
  method: sparkMethods.spark_flashnet_clawbackFunds,
});

export type SparkFlashnetClawbackFundsSuccessResponse = v.InferOutput<
  typeof sparkFlashnetClawbackFundsSuccessResponseSchema
>;
