import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    orderId: v.string(),
    newFeeRate: v.number(),
  }),
  method: runesMethods.runes_rbfOrder,
});

export type RunesRbfOrderRequest = v.InferOutput<typeof runesRbfOrderRequestSchema>;
