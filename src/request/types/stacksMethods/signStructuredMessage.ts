import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stacksSignStructuredMessageMethodName = 'stx_signStructuredMessage';

export const stacksSignStructuredMessageParamsSchema = v.object({
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
export type StacksSignStructuredMessageParams = v.InferOutput<
  typeof stacksSignStructuredMessageParamsSchema
>;

export const stacksSignStructuredMessageResultSchema = v.object({
  /**
   * Signature of the message.
   */
  signature: v.string(),

  /**
   * Public key as hex-encoded string.
   */
  publicKey: v.string(),
});
export type StacksSignStructuredMessageResult = v.InferOutput<
  typeof stacksSignStructuredMessageResultSchema
>;

export const stacksSignStructuredMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksSignStructuredMessageMethodName),
    params: stacksSignStructuredMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksSignStructuredMessageRequestMessage = v.InferOutput<
  typeof stacksSignStructuredMessageRequestMessageSchema
>;

export type StacksSignStructuredMessage = MethodParamsAndResult<
  StacksSignStructuredMessageParams,
  StacksSignStructuredMessageResult
>;
