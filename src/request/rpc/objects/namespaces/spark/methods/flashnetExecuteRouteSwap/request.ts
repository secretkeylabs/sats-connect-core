import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetExecuteRouteSwapParamsSchema = v.object({
  hops: v.array(
    v.object({
      poolId: v.string(),
      assetInAddress: v.string(),
      assetOutAddress: v.string(),
      hopIntegratorFeeRateBps: v.optional(v.number()),
    })
  ),
  initialAssetAddress: v.string(),
  inputAmount: v.string(),
  maxRouteSlippageBps: v.string(),
  minAmountOut: v.optional(v.string()),
  integratorFeeRateBps: v.optional(v.number()),
  integratorPublicKey: v.optional(v.string()),
});

export type SparkFlashnetExecuteRouteSwapParams = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapParamsSchema
>;

export const sparkFlashnetExecuteRouteSwapRequestSchema = createRequestSchema({
  paramsSchema: sparkFlashnetExecuteRouteSwapParamsSchema,
  method: sparkMethods.spark_flashnet_executeRouteSwap,
});

export type SparkFlashnetExecuteRouteSwapRequest = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapRequestSchema
>;
