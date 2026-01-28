import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetExecuteRouteSwapResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  outputAmount: v.string(),
  executionPrice: v.string(),
  finalOutboundTransferId: v.string(),
  error: v.optional(v.string()),
});

export type SparkFlashnetExecuteRouteSwapResult = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapResultSchema
>;

export const sparkFlashnetExecuteRouteSwapSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkFlashnetExecuteRouteSwapResultSchema,
  method: sparkMethods.spark_flashnet_executeRouteSwap,
});

export type SparkFlashnetExecuteRouteSwapSuccessResponse = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapSuccessResponseSchema
>;
