import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetExecuteSwapParamsSchema = v.object({
  poolId: v.string(),
  assetInAddress: v.string(),
  assetOutAddress: v.string(),
  amountIn: v.string(),
  maxSlippageBps: v.number(),
  minAmountOut: v.optional(v.string()),
  integratorFeeRateBps: v.optional(v.number()),
  integratorPublicKey: v.optional(v.string()),
});

export type SparkFlashnetExecuteSwapParams = v.InferOutput<
  typeof sparkFlashnetExecuteSwapParamsSchema
>;

export const sparkFlashnetExecuteSwapRequestSchema = createRequestSchema({
  paramsSchema: sparkFlashnetExecuteSwapParamsSchema,
  method: sparkMethods.spark_flashnet_executeSwap,
});

export type SparkFlashnetExecuteSwapRequest = v.InferOutput<
  typeof sparkFlashnetExecuteSwapRequestSchema
>;
