import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkFlashnetExecuteSwapRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    poolId: v.string(),
    assetInAddress: v.string(),
    assetOutAddress: v.string(),
    amountIn: v.string(),
    maxSlippageBps: v.number(),
    minAmountOut: v.optional(v.string()),
    integratorFeeRateBps: v.optional(v.number()),
    integratorPublicKey: v.optional(v.string()),
  }),
  method: sparkMethods.spark_flashnet_executeSwap,
});

export type SparkFlashnetExecuteSwapRequest = v.InferOutput<
  typeof sparkFlashnetExecuteSwapRequestSchema
>;
