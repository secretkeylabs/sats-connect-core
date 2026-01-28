import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';

export const runesRbfOrderSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    orderId: v.string(),
    fundRBFTransactionId: v.string(),
    fundingAddress: v.string(),
  }),
  method: runesMethods.runes_rbfOrder,
});

export type RunesRbfOrderSuccessResponse = v.InferOutput<typeof runesRbfOrderSuccessResponseSchema>;
