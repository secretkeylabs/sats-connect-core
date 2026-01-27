import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesEstimateRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    orderId: v.string(),
    newFeeRate: v.number(),
  }),
  method: runesMethods.runes_estimateRbfOrder,
});

export type RunesEstimateRbfOrderRequest = v.InferOutput<typeof runesEstimateRbfOrderRequestSchema>;
