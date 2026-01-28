import * as v from 'valibot';

export const sparkFlashnetConfirmInitialDepositIntentSchema = v.object({
  type: v.literal('confirmInitialDeposit'),
  data: v.object({
    poolId: v.string(),
    assetASparkTransferId: v.string(),
    poolOwnerPublicKey: v.string(),
    nonce: v.string(),
  }),
});
