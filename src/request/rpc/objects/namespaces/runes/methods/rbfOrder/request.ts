import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';

export const runesRbfOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    orderId: v.string(),
    newFeeRate: v.number(),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_rbfOrder,
});

export type RunesRbfOrderRequest = v.InferOutput<typeof runesRbfOrderRequestSchema>;
