import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetExecuteRouteSwapRequestSchema = createRequestSchema({
  paramsSchema: v.object({
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
  }),
  method: sparkMethods.spark_flashnet_executeRouteSwap,
});

export type SparkFlashnetExecuteRouteSwapRequest = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapRequestSchema
>;
