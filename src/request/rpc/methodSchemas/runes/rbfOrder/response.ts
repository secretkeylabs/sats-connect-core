import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { runesMethods } from '../../../../methods';

export const runesRbfOrderSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    orderId: v.string(),
    fundRBFTransactionId: v.string(),
    fundingAddress: v.string(),
  }),
  method: runesMethods.runes_rbfOrder,
});

export type RunesRbfOrderSuccessResponse = v.InferOutput<typeof runesRbfOrderSuccessResponseSchema>;
