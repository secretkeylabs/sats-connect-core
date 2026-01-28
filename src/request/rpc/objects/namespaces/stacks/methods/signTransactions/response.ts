import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignTransactionsResultSchema = v.object({
  /**
   * The signed transactions as hex-encoded strings, in the same order as in the
   * sign request.
   */
  transactions: v.array(v.string()),
});

export type StacksSignTransactionsResult = v.InferOutput<typeof stacksSignTransactionsResultSchema>;

export const stacksSignTransactionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksSignTransactionsResultSchema,
  method: stacksMethods.stx_signTransactions,
});

export type StacksSignTransactionsSuccessResponse = v.InferOutput<
  typeof stacksSignTransactionsSuccessResponseSchema
>;
