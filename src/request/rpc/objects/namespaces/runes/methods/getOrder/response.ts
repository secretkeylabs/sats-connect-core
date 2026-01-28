import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';

export const runesGetOrderSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
    orderType: v.union([v.literal('rune_mint'), v.literal('rune_etch')]),
    state: v.union([
      v.literal('new'),
      v.literal('pending'),
      v.literal('executing'),
      v.literal('complete'),
      v.literal('failed'),
      v.literal('refunded'),
      v.literal('stale'),
    ]),
    fundingAddress: v.string(),
    reason: v.optional(v.string()),
    createdAt: v.string(),
  }),
  method: runesMethods.runes_getOrder,
});

export type RunesGetOrderSuccessResponse = v.InferOutput<typeof runesGetOrderSuccessResponseSchema>;
