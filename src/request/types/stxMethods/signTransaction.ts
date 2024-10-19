import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxSignTransactionMethodName = 'stx_signTransaction';
export const stxSignTransactionParamsSchema = v.object({
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
export type StxSignTransactionParams = v.InferOutput<typeof stxSignTransactionParamsSchema>;
export const stxSignTransactionResultSchema = v.object({
  /**
   * The signed transaction as a hex-encoded string.
   */
  transaction: v.string(),
});
export type StxSignTransactionResult = v.InferOutput<typeof stxSignTransactionResultSchema>;
export const stxSignTransactionRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxSignTransactionMethodName),
    params: stxSignTransactionParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxSignTransactionRequestMessage = v.InferOutput<
  typeof stxSignTransactionRequestMessageSchema
>;
export type StxSignTransaction = MethodParamsAndResult<
  StxSignTransactionParams,
  StxSignTransactionResult
>;
