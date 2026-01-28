import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesEstimateMintResultSchema = v.object({
  totalSize: v.number(),
  totalCost: v.number(),
  costBreakdown: v.object({
    postage: v.number(),
    networkFee: v.number(),
    serviceFee: v.number(),
    appServiceFee: v.number(),
  }),
});

export type RunesEstimateMintResult = v.InferOutput<typeof runesEstimateMintResultSchema>;

export const runesEstimateMintSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesEstimateMintResultSchema,
  method: runesMethods.runes_estimateMint,
});

export type RunesEstimateMintSuccessResponse = v.InferOutput<
  typeof runesEstimateMintSuccessResponseSchema
>;
