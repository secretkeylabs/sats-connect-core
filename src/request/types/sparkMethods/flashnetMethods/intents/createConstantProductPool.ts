import * as v from 'valibot';

export const sparkFlashnetCreateConstantProductPoolIntentSchema = v.object({
  type: v.literal('createConstantProductPool'),
  data: v.object({
    poolOwnerPublicKey: v.string(),
    assetAAddress: v.string(),
    assetBAddress: v.string(),
    lpFeeRateBps: v.number(),
    totalHostFeeRateBps: v.number(),
    nonce: v.string(),
  }),
});
