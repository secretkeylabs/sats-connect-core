import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { stacksMethods } from '../../../../methods';

export const stacksSignTransactionsRequestSchema = createRequestSchema({
  paramsSchema: v.object({
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
  }),
  method: stacksMethods.stx_signTransactions,
});

export type StacksSignTransactionsRequest = v.InferOutput<
  typeof stacksSignTransactionsRequestSchema
>;
