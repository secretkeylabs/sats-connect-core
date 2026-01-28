import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';
import * as v from 'valibot';

export const runesGetOrderParamsSchema = v.object({
  id: v.string(),
  network: v.optional(v.enum(BitcoinNetworkType)),
});

export type RunesGetOrderParams = v.InferOutput<typeof runesGetOrderParamsSchema>;

export const runesGetOrderRequestSchema = createRequestSchema({
  paramsSchema: runesGetOrderParamsSchema,
  method: runesMethods.runes_getOrder,
});

export type RunesGetOrderRequest = v.InferOutput<typeof runesGetOrderRequestSchema>;
