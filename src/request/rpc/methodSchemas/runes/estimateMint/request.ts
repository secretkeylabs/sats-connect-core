import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesEstimateMintRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    runeName: v.string(),
    repeats: v.number(),
    destinationAddress: v.string(),
    feeRate: v.number(),
    appServiceFee: v.optional(v.number()),
    appServiceFeeAddress: v.optional(v.string()),
  }),
  method: runesMethods.runes_estimateMint,
});

export type RunesEstimateMintRequest = v.InferOutput<typeof runesEstimateMintRequestSchema>;
