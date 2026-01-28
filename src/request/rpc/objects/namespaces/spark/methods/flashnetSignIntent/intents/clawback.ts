import * as v from 'valibot';

export const sparkFlashnetClawbackIntentSchema = v.object({
  type: v.literal('clawback'),
  data: v.object({
    senderPublicKey: v.string(),
    sparkTransferId: v.string(),
    lpIdentityPublicKey: v.string(),
    nonce: v.string(),
  }),
});
