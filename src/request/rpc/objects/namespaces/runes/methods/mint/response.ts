import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesMintResultSchema = v.object({
  orderId: v.string(),
  fundTransactionId: v.string(),
  fundingAddress: v.string(),
});

export type RunesMintResult = v.InferOutput<typeof runesMintResultSchema>;

export const runesMintSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesMintResultSchema,
  method: runesMethods.runes_mint,
});

export type RunesMintSuccessResponse = v.InferOutput<typeof runesMintSuccessResponseSchema>;
