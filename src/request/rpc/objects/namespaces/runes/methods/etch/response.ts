import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesEtchResultSchema = v.object({
  orderId: v.string(),
  fundTransactionId: v.string(),
  fundingAddress: v.string(),
});

export type RunesEtchResult = v.InferOutput<typeof runesEtchResultSchema>;

export const runesEtchSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesEtchResultSchema,
  method: runesMethods.runes_etch,
});

export type RunesEtchSuccessResponse = v.InferOutput<typeof runesEtchSuccessResponseSchema>;
