import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { runesMethods } from '../../../../methods';

export const runesEstimateRbfOrderSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    rbfCost: v.number(),
    fundingAddress: v.string(),
  }),
  method: runesMethods.runes_estimateRbfOrder,
});

export type RunesEstimateRbfOrderSuccessResponse = v.InferOutput<
  typeof runesEstimateRbfOrderSuccessResponseSchema
>;
