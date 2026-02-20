import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesGetBalanceResultSchema = v.object({
  balances: v.array(
    v.object({
      runeName: v.string(),
      amount: v.string(),
      divisibility: v.number(),
      symbol: v.string(),
      inscriptionId: v.nullish(v.string()),
      spendableBalance: v.string(),
    })
  ),
});

export type RunesGetBalanceResult = v.InferOutput<typeof runesGetBalanceResultSchema>;

export const runesGetBalanceSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesGetBalanceResultSchema,
  method: runesMethods.runes_getBalance,
});

export type RunesGetBalanceSuccessResponse = v.InferOutput<
  typeof runesGetBalanceSuccessResponseSchema
>;
