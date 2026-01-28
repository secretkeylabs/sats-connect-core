import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetExecuteSwapResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  amountOut: v.optional(v.string()),
  feeAmount: v.optional(v.string()),
  executionPrice: v.optional(v.string()),
  assetOutAddress: v.optional(v.string()),
  assetInAddress: v.optional(v.string()),
  outboundTransferId: v.optional(v.string()),
  error: v.optional(v.string()),
});

export type SparkFlashnetExecuteSwapResult = v.InferOutput<
  typeof sparkFlashnetExecuteSwapResultSchema
>;

export const sparkFlashnetExecuteSwapSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkFlashnetExecuteSwapResultSchema,
  method: sparkMethods.spark_flashnet_executeSwap,
});

export type SparkFlashnetExecuteSwapSuccessResponse = v.InferOutput<
  typeof sparkFlashnetExecuteSwapSuccessResponseSchema
>;
