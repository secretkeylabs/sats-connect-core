import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesGetBalanceParamsSchema = v.nullish(v.null());

export type RunesGetBalanceParams = v.InferOutput<typeof runesGetBalanceParamsSchema>;

export const runesGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: runesGetBalanceParamsSchema,
  method: runesMethods.runes_getBalance,
});

export type RunesGetBalanceRequest = v.InferOutput<typeof runesGetBalanceRequestSchema>;
