import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';

export const runesMintRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    appServiceFee: v.optional(v.number()),
    appServiceFeeAddress: v.optional(v.string()),
    destinationAddress: v.string(),
    feeRate: v.number(),
    refundAddress: v.string(),
    repeats: v.number(),
    runeName: v.string(),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_mint,
});

export type RunesMintRequest = v.InferOutput<typeof runesMintRequestSchema>;
