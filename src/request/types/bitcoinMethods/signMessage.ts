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

// ---- V2 ----

export const bitcoinSignMessageV2MethodName = 'bitcoin_signMessageV2';

export const bitcoinSignMessageV2ParamsSchema = v.object({
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
export type BitcoinSignMessageV2Params = v.InferOutput<typeof bitcoinSignMessageV2ParamsSchema>;
export const bitcoinSignMessageV2ResultSchema = v.object({
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
export type BitcoinSignMessageV2Result = v.InferOutput<typeof bitcoinSignMessageV2ResultSchema>;
export const bitcoinSignMessageV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinSignMessageV2MethodName),
    params: bitcoinSignMessageV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type BitcoinSignMessageV2RequestMessage = v.InferOutput<
  typeof bitcoinSignMessageV2RequestMessageSchema
>;
export type BitcoinSignMessageV2 = MethodParamsAndResult<
  v.InferOutput<typeof bitcoinSignMessageV2ParamsSchema>,
  v.InferOutput<typeof bitcoinSignMessageV2ResultSchema>
>;
