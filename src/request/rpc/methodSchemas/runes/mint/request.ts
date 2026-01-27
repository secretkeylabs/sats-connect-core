import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesMintRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    appServiceFee: v.optional(v.number()),
    appServiceFeeAddress: v.optional(v.string()),
    destinationAddress: v.string(),
    feeRate: v.number(),
    refundAddress: v.string(),
    repeats: v.number(),
    runeName: v.string(),
  }),
  method: runesMethods.runes_mint,
});

export type RunesMintRequest = v.InferOutput<typeof runesMintRequestSchema>;
