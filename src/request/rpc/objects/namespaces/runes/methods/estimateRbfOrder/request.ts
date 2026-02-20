import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';
import * as v from 'valibot';

export const runesEstimateRbfOrderParamsSchema = v.object({
  orderId: v.string(),
  newFeeRate: v.number(),
  network: v.optional(v.enum(BitcoinNetworkType)),
});

export type RunesEstimateRbfOrderParams = v.InferOutput<typeof runesEstimateRbfOrderParamsSchema>;

export const runesEstimateRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: runesEstimateRbfOrderParamsSchema,
  method: runesMethods.runes_estimateRbfOrder,
});

export type RunesEstimateRbfOrderRequest = v.InferOutput<typeof runesEstimateRbfOrderRequestSchema>;
