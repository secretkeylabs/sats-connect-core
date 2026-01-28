import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesEstimateRbfOrderResultSchema = v.object({
  rbfCost: v.number(),
  fundingAddress: v.string(),
});

export type RunesEstimateRbfOrderResult = v.InferOutput<typeof runesEstimateRbfOrderResultSchema>;

export const runesEstimateRbfOrderSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesEstimateRbfOrderResultSchema,
  method: runesMethods.runes_estimateRbfOrder,
});

export type RunesEstimateRbfOrderSuccessResponse = v.InferOutput<
  typeof runesEstimateRbfOrderSuccessResponseSchema
>;
