import * as v from 'valibot';

export const sparkFlashnetRouteSwapIntentSchema = v.object({
  type: v.literal('executeRouteSwap'),
  data: v.object({
    userPublicKey: v.string(),
    initialSparkTransferId: v.string(),
    hops: v.array(
      v.object({
        poolId: v.string(),
        assetInAddress: v.string(),
        assetOutAddress: v.string(),
        hopIntegratorFeeRateBps: v.optional(v.number()),
      })
    ),
    inputAmount: v.string(),
    maxRouteSlippageBps: v.number(),
    minAmountOut: v.string(),
    defaultIntegratorFeeRateBps: v.optional(v.number()),
    nonce: v.string(),
  }),
});
