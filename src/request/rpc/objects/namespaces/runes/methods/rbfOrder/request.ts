import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';
import * as v from 'valibot';

export const runesRbfOrderParamsSchema = v.object({
  orderId: v.string(),
  newFeeRate: v.number(),
  network: v.optional(v.enum(BitcoinNetworkType)),
});

export type RunesRbfOrderParams = v.InferOutput<typeof runesRbfOrderParamsSchema>;

export const runesRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: runesRbfOrderParamsSchema,
  method: runesMethods.runes_rbfOrder,
});

export type RunesRbfOrderRequest = v.InferOutput<typeof runesRbfOrderRequestSchema>;
