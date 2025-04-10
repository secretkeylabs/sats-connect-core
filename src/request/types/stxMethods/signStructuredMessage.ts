import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxSignStructuredMessageMethodName = 'stx_signStructuredMessage';

export const stxSignStructuredMessageParamsSchema = v.object({
  /**
   * The domain to be signed.
   */
  domain: v.string(),

  /**
   * Message payload to be signed.
   */
  message: v.string(),

  /**
   * The public key to sign the message with.
   */
  publicKey: v.optional(v.string()),
});
export type StxSignStructuredMessageParams = v.InferOutput<
  typeof stxSignStructuredMessageParamsSchema
>;

export const stxSignStructuredMessageResultSchema = v.object({
  /**
   * Signature of the message.
   */
  signature: v.string(),

  /**
   * Public key as hex-encoded string.
   */
  publicKey: v.string(),
});
export type StxSignStructuredMessageResult = v.InferOutput<
  typeof stxSignStructuredMessageResultSchema
>;

export const stxSignStructuredMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxSignStructuredMessageMethodName),
    params: stxSignStructuredMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxSignStructuredMessageRequestMessage = v.InferOutput<
  typeof stxSignStructuredMessageRequestMessageSchema
>;

export type StxSignStructuredMessage = MethodParamsAndResult<
  StxSignStructuredMessageParams,
  StxSignStructuredMessageResult
>;
