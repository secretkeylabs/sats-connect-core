import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { runesMethods } from '../../../../methods';

export const runesEtchSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    orderId: v.string(),
    fundTransactionId: v.string(),
    fundingAddress: v.string(),
  }),
  method: runesMethods.runes_etch,
});

export type RunesEtchSuccessResponse = v.InferOutput<typeof runesEtchSuccessResponseSchema>;
