import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesRbfOrderResultSchema = v.object({
  orderId: v.string(),
  fundRBFTransactionId: v.string(),
  fundingAddress: v.string(),
});

export type RunesRbfOrderResult = v.InferOutput<typeof runesRbfOrderResultSchema>;

export const runesRbfOrderSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesRbfOrderResultSchema,
  method: runesMethods.runes_rbfOrder,
});

export type RunesRbfOrderSuccessResponse = v.InferOutput<typeof runesRbfOrderSuccessResponseSchema>;
