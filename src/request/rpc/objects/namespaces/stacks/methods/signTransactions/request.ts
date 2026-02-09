import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignTransactionsParamsSchema = v.object({
  /**
   * The transactions to sign as hex-encoded strings.
   */
  transactions: v.pipe(
    v.array(
      v.pipe(
        v.string(),
        v.check(() => {
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
  broadcast: v.optional(v.boolean(), true),
});

export type StacksSignTransactionsParams = v.InferOutput<typeof stacksSignTransactionsParamsSchema>;

export const stacksSignTransactionsRequestSchema = createRequestSchema({
  paramsSchema: stacksSignTransactionsParamsSchema,
  method: stacksMethods.stx_signTransactions,
});

export type StacksSignTransactionsRequest = v.InferOutput<
  typeof stacksSignTransactionsRequestSchema
>;
