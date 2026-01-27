import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { runesMethods } from '../../../../methods';

export const runesEstimateMintSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    totalSize: v.number(),
    totalCost: v.number(),
    costBreakdown: v.object({
      postage: v.number(),
      networkFee: v.number(),
      serviceFee: v.number(),
      appServiceFee: v.number(),
    }),
  }),
  method: runesMethods.runes_estimateMint,
});

export type RunesEstimateMintSuccessResponse = v.InferOutput<
  typeof runesEstimateMintSuccessResponseSchema
>;
