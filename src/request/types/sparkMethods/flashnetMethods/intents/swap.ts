import * as v from 'valibot';
import { FlashnetIntentType } from './common';

export const sparkFlashnetSwapIntentSchema = v.object({
  intentType: v.literal(FlashnetIntentType.Swap),
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
});
