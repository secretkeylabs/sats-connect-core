import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetExecuteSwapSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    requestId: v.string(),
    accepted: v.boolean(),
    amountOut: v.optional(v.string()),
    feeAmount: v.optional(v.string()),
    executionPrice: v.optional(v.string()),
    assetOutAddress: v.optional(v.string()),
    assetInAddress: v.optional(v.string()),
    outboundTransferId: v.optional(v.string()),
    error: v.optional(v.string()),
  }),
  method: sparkMethods.spark_flashnet_executeSwap,
});

export type SparkFlashnetExecuteSwapSuccessResponse = v.InferOutput<
  typeof sparkFlashnetExecuteSwapSuccessResponseSchema
>;
