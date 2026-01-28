import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';

export const runesMintSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    orderId: v.string(),
    fundTransactionId: v.string(),
    fundingAddress: v.string(),
  }),
  method: runesMethods.runes_mint,
});

export type RunesMintSuccessResponse = v.InferOutput<typeof runesMintSuccessResponseSchema>;
