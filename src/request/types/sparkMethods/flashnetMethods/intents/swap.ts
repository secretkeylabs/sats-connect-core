import * as v from 'valibot';

export const sparkFlashnetSwapIntentSchema = v.object({
  type: v.literal('executeSwap'),
  data: v.object({
    userPublicKey: v.string(),
    poolId: v.string(),
    transferId: v.string(),
    assetInAddress: v.string(),
    assetOutAddress: v.string(),
    amountIn: v.string(),
    maxSlippageBps: v.number(),
    minAmountOut: v.string(),
    totalIntegratorFeeRateBps: v.optional(v.number()),
    nonce: v.string(),
  }),
});
