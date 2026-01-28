import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';
import * as v from 'valibot';

export const runesMintParamsSchema = v.object({
  appServiceFee: v.optional(v.number()),
  appServiceFeeAddress: v.optional(v.string()),
  destinationAddress: v.string(),
  feeRate: v.number(),
  refundAddress: v.string(),
  repeats: v.number(),
  runeName: v.string(),
  network: v.optional(v.enum(BitcoinNetworkType)),
});

export type RunesMintParams = v.InferOutput<typeof runesMintParamsSchema>;

export const runesMintRequestSchema = createRequestSchema({
  paramsSchema: runesMintParamsSchema,
  method: runesMethods.runes_mint,
});

export type RunesMintRequest = v.InferOutput<typeof runesMintRequestSchema>;
