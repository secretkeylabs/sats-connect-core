import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { stacksMethods } from '../../../../methods';

export const stacksSignTransactionRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * The transaction to sign as a hex-encoded string.
     */
    transaction: v.string(),
    /**
     * The public key to sign the transaction with. The wallet may use any key
     * when not provided.
     */
    pubkey: v.optional(v.string()),
    /**
     * Whether to broadcast the transaction after signing. Defaults to `true`.
     */
    broadcast: v.optional(v.boolean()),
  }),
  method: stacksMethods.stx_signTransaction,
});

export type StacksSignTransactionRequest = v.InferOutput<typeof stacksSignTransactionRequestSchema>;
