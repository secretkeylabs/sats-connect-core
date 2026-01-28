import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';

export const runesEstimateEtchSuccessResponseSchema = createSuccessResponseSchema({
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
  method: runesMethods.runes_estimateEtch,
});

export type RunesEstimateEtchSuccessResponse = v.InferOutput<
  typeof runesEstimateEtchSuccessResponseSchema
>;
