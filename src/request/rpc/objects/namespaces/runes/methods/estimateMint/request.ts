import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';

export const runesEstimateMintRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    runeName: v.string(),
    repeats: v.number(),
    destinationAddress: v.string(),
    feeRate: v.number(),
    appServiceFee: v.optional(v.number()),
    appServiceFeeAddress: v.optional(v.string()),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_estimateMint,
});

export type RunesEstimateMintRequest = v.InferOutput<typeof runesEstimateMintRequestSchema>;
