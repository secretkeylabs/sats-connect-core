import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { MessageSigningProtocols } from './common';

export const signMessageMethodName = 'signMessage';

export const signMessageParamsSchema = v.object({
  /**
   * The address used for signing.
   **/
  address: v.string(),
  /**
   * The message to sign.
   **/
  message: v.string(),
  /**
   * The protocol to use for signing the message.
   *
   * If not specified, defaults to ECDSA if signing with a P2WPKH or P2SH address,
   * and to BIP322 if signing with a taproot address.
   */
  protocol: v.optional(v.enum(MessageSigningProtocols)),
});
export type SignMessageParams = v.InferOutput<typeof signMessageParamsSchema>;
export const signMessageResultSchema = v.object({
  /**
   * The signature of the message.
   */
  signature: v.string(),
  /**
   * hash of the message.
   */
  messageHash: v.string(),
  /**
   * The address used for signing.
   */
  address: v.string(),
  /**
   * The protocol used for signing the message.
   */
  protocol: v.enum(MessageSigningProtocols),
});
export type SignMessageResult = v.InferOutput<typeof signMessageResultSchema>;
export const signMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(signMessageMethodName),
    params: signMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type SignMessageRequestMessage = v.InferOutput<typeof signMessageRequestMessageSchema>;
export type SignMessage = MethodParamsAndResult<
  v.InferOutput<typeof signMessageParamsSchema>,
  v.InferOutput<typeof signMessageResultSchema>
>;
