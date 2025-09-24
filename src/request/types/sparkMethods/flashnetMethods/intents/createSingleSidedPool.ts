import * as v from 'valibot';

export const sparkFlashnetCreateSingleSidedPoolIntentSchema = v.object({
  type: v.literal('createSingleSidedPool'),
  data: v.object({
    assetAAddress: v.string(),
    assetBAddress: v.string(),
    assetAInitialReserve: v.string(),
    virtualReserveA: v.union([v.number(), v.string()]),
    virtualReserveB: v.union([v.number(), v.string()]),
    threshold: v.union([v.number(), v.string()]),
    lpFeeRateBps: v.union([v.number(), v.string()]),
    totalHostFeeRateBps: v.union([v.number(), v.string()]),
    poolOwnerPublicKey: v.string(),
    nonce: v.string(),
  }),
});
