import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';

export const runesGetBalanceSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
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
  }),
  method: runesMethods.runes_getBalance,
});

export type RunesGetBalanceSuccessResponse = v.InferOutput<
  typeof runesGetBalanceSuccessResponseSchema
>;
