import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stacksSignTransactionMethodName = 'stx_signTransaction';
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
export const stacksSignTransactionResultSchema = v.object({
  /**
   * The signed transaction as a hex-encoded string.
   */
  transaction: v.string(),
});
export type StacksSignTransactionResult = v.InferOutput<typeof stacksSignTransactionResultSchema>;
export const stacksSignTransactionRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksSignTransactionMethodName),
    params: stacksSignTransactionParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksSignTransactionRequestMessage = v.InferOutput<
  typeof stacksSignTransactionRequestMessageSchema
>;
export type StacksSignTransaction = MethodParamsAndResult<
  StacksSignTransactionParams,
  StacksSignTransactionResult
>;
