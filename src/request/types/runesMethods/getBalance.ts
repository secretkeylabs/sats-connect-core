import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const runesGetBalanceMethodName = 'runes_getBalance';

export const runesGetBalanceParamsSchema = v.nullish(v.null());
export type RunesGetBalanceParams = v.InferOutput<typeof runesGetBalanceParamsSchema>;

export const runesGetBalanceResultSchema = v.object({
  balances: v.array(
    v.object({
      runeName: v.string(),
      amount: v.string(),
      divisibility: v.number(),
      symbol: v.string(),
      inscriptionId: v.nullish(v.string()),
    })
  ),
});
export type RunesGetBalanceResult = v.InferOutput<typeof runesGetBalanceResultSchema>;

export const runesGetBalanceRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(runesGetBalanceMethodName),
    params: runesGetBalanceParamsSchema,
    id: v.string(),
  }).entries,
});
export type runesGetBalanceRequestMessage = v.InferOutput<
  typeof runesGetBalanceRequestMessageSchema
>;

export type RunesGetBalance = MethodParamsAndResult<RunesGetBalanceParams, RunesGetBalanceResult>;
