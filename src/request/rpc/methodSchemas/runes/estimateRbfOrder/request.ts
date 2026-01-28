import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';
import { BitcoinNetworkType } from '../../../../../types';

export const runesEstimateRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    orderId: v.string(),
    newFeeRate: v.number(),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_estimateRbfOrder,
});

export type RunesEstimateRbfOrderRequest = v.InferOutput<typeof runesEstimateRbfOrderRequestSchema>;
