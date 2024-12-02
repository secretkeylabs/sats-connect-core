import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxSignTransactionsMethodName = 'stx_signTransactions';
export const stxSignTransactionsParamsSchema = v.object({
  /**
   * The transactions to sign as hex-encoded strings.
   */
  transactions: v.pipe(
    v.array(
      v.pipe(
        v.string(),
        v.check((hex) => {
          // NOTE: The following method is a `@stacks/transactions` v7 method,
          // and is left here in preparation for when other libraries are also
          // updated to v7.
          //
          // return Boolean(deserializeTransaction(hex));
          return true;
        }, 'Invalid hex-encoded Stacks transaction.')
      )
    ),
    v.minLength(1)
  ),

  /**
   * Whether the signed transactions should be broadcast after signing. Defaults
   * to `true`.
   */
  broadcast: v.optional(v.boolean()),
});
export type StxSignTransactionsParams = v.InferOutput<typeof stxSignTransactionsParamsSchema>;
export const stxSignTransactionsResultSchema = v.object({
  /**
   * The signed transactions as hex-encoded strings, in the same order as in the
   * sign request.
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
