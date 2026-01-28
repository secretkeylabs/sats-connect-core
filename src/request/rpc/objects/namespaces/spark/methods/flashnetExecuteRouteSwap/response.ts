import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkFlashnetExecuteRouteSwapSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    requestId: v.string(),
    accepted: v.boolean(),
    outputAmount: v.string(),
    executionPrice: v.string(),
    finalOutboundTransferId: v.string(),
    error: v.optional(v.string()),
  }),
  method: sparkMethods.spark_flashnet_executeRouteSwap,
});

export type SparkFlashnetExecuteRouteSwapSuccessResponse = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapSuccessResponseSchema
>;
