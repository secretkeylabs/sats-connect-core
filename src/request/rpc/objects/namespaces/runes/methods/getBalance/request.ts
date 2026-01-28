import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';

export const runesGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: runesMethods.runes_getBalance,
});

export type RunesGetBalanceRequest = v.InferOutput<typeof runesGetBalanceRequestSchema>;
