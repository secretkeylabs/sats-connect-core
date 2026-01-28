import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';
import * as v from 'valibot';

export const runesEstimateMintParamsSchema = v.object({
  runeName: v.string(),
  repeats: v.number(),
  destinationAddress: v.string(),
  feeRate: v.number(),
  appServiceFee: v.optional(v.number()),
  appServiceFeeAddress: v.optional(v.string()),
  network: v.optional(v.enum(BitcoinNetworkType)),
});

export type RunesEstimateMintParams = v.InferOutput<typeof runesEstimateMintParamsSchema>;

export const runesEstimateMintRequestSchema = createRequestSchema({
  paramsSchema: runesEstimateMintParamsSchema,
  method: runesMethods.runes_estimateMint,
});

export type RunesEstimateMintRequest = v.InferOutput<typeof runesEstimateMintRequestSchema>;
