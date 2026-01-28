import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';
import { BitcoinNetworkType } from '../../../../../types';

export const runesGetOrderRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    id: v.string(),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_getOrder,
});

export type RunesGetOrderRequest = v.InferOutput<typeof runesGetOrderRequestSchema>;
