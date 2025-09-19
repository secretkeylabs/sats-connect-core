import * as v from 'valibot';
import { FlashnetIntentType } from './common';

export const sparkFlashnetRouteSwapIntentSchema = v.object({
  intentType: v.literal(FlashnetIntentType.RouteSwap),
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
});
