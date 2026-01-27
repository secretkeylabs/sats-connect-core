import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: runesMethods.runes_getBalance,
});

export type RunesGetBalanceRequest = v.InferOutput<typeof runesGetBalanceRequestSchema>;
