import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';

export const runesGetOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    id: v.string(),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_getOrder,
});

export type RunesGetOrderRequest = v.InferOutput<typeof runesGetOrderRequestSchema>;
