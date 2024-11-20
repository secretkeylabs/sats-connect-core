import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxSignTransactionsMethodName = 'stx_signTransactions';
export const stxSignTransactionsParamsSchema = v.object({
  /**
   * The transactions to sign as hex-encoded strings.
   */
  transactions: v.array(
    v.object({
      transactionHex: v.string(),

      /**
       * Whether the transaction should be broadcast after signing. Defaults to `false`.
       */
      broadcast: v.optional(v.boolean()),
    })
  ),
});
export type StxSignTransactionsParams = v.InferOutput<typeof stxSignTransactionsParamsSchema>;
export const stxSignTransactionsResultSchema = v.object({
  /**
   * The signed transactions as hex-encoded strings. In the same order as the sign request.
   */
  transactions: v.array(v.string()),
});
export type StxSignTransactionsResult = v.InferOutput<typeof stxSignTransactionsResultSchema>;
export const stxSignTransactionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxSignTransactionsMethodName),
    params: stxSignTransactionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxSignTransactionsRequestMessage = v.InferOutput<
  typeof stxSignTransactionsRequestMessageSchema
>;
export type StxSignTransactions = MethodParamsAndResult<
  StxSignTransactionsParams,
  StxSignTransactionsResult
>;
