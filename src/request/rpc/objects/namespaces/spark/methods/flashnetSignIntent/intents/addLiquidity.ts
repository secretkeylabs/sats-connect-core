import * as v from 'valibot';

export const sparkFlashnetAddLiquidityIntentSchema = v.object({
  type: v.literal('addLiquidity'),
  data: v.object({
    userPublicKey: v.string(),
    poolId: v.string(),
    assetAAmount: v.string(),
    assetBAmount: v.string(),
    assetAMinAmountIn: v.string(),
    assetBMinAmountIn: v.string(),
    assetATransferId: v.string(),
    assetBTransferId: v.string(),
    nonce: v.string(),
  }),
});
