import * as v from 'valibot';

export const sparkFlashnetRouteSwapIntentSchema = v.object({
  type: v.literal('executeRouteSwap'),
  data: v.object({
    userPublicKey: v.string(),
    initialSparkTransferId: v.string(),
    hops: v.array(
      v.object({
        poolId: v.string(),
        inputAssetAddress: v.string(),
        outputAssetAddress: v.string(),
        hopIntegratorFeeRateBps: v.optional(v.union([v.number(), v.string()])),
      })
    ),
    inputAmount: v.string(),
    maxRouteSlippageBps: v.union([v.number(), v.string()]),
    minAmountOut: v.string(),
    defaultIntegratorFeeRateBps: v.optional(v.union([v.number(), v.string()])),
    nonce: v.string(),
  }),
});
