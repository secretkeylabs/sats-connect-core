import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignTransactionParamsSchema = v.object({
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
});

export type StacksSignTransactionParams = v.InferOutput<typeof stacksSignTransactionParamsSchema>;

export const stacksSignTransactionRequestSchema = createRequestSchema({
  paramsSchema: stacksSignTransactionParamsSchema,
  method: stacksMethods.stx_signTransaction,
});

export type StacksSignTransactionRequest = v.InferOutput<typeof stacksSignTransactionRequestSchema>;
