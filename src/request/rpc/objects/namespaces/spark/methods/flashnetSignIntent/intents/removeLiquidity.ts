import * as v from 'valibot';

export const sparkFlashnetRemoveLiquidityIntentSchema = v.object({
  type: v.literal('removeLiquidity'),
  data: v.object({
    userPublicKey: v.string(),
    poolId: v.string(),
    lpTokensToRemove: v.string(),
    nonce: v.string(),
  }),
});
