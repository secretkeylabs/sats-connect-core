import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';

export const runesEstimateRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    orderId: v.string(),
    newFeeRate: v.number(),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_estimateRbfOrder,
});

export type RunesEstimateRbfOrderRequest = v.InferOutput<typeof runesEstimateRbfOrderRequestSchema>;
