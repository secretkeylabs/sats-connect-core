import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksSignTransactionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The signed transactions as hex-encoded strings, in the same order as in the
     * sign request.
     */
    transactions: v.array(v.string()),
  }),
  method: stacksMethods.stx_signTransactions,
});

export type StacksSignTransactionsSuccessResponse = v.InferOutput<
  typeof stacksSignTransactionsSuccessResponseSchema
>;
