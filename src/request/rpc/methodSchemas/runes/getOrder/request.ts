import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesGetOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    id: v.string(),
  }),
  method: runesMethods.runes_getOrder,
});

export type RunesGetOrderRequest = v.InferOutput<typeof runesGetOrderRequestSchema>;
