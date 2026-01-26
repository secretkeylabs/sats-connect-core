import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { MessageSigningProtocols } from './common';

export const signMultipleMessagesMethodName = 'signMultipleMessages';

export const signMultipleMessagesParamsSchema = v.array(
  v.object({
    /**
     * The address used for signing.
     **/
    address: v.string(),
    /**
     * The message to sign.
     **/
    message: v.string(),
    /**
     * The protocol to use to sign the message.
     *
     * If not specified, defaults to ECDSA if signing with a P2WPKH or P2SH address,
     * and to BIP322 if signing with a taproot address.
     */
    protocol: v.optional(v.enum(MessageSigningProtocols)),
  })
);
export type SignMultipleMessagesParams = v.InferOutput<typeof signMultipleMessagesParamsSchema>;
export const signMultipleMessagesResultSchema = v.array(
  v.object({
    /**
     * The signature of the message.
     */
    signature: v.string(),
    /**
     * The original message which was signed.
     */
    message: v.string(),
    /**
     * Hash of the message.
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
  })
);
export type SignMultipleMessagesResult = v.InferOutput<typeof signMultipleMessagesResultSchema>;
export const signMultipleMessagesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(signMultipleMessagesMethodName),
    params: signMultipleMessagesParamsSchema,
    id: v.string(),
  }).entries,
});
export type SignMultipleMessagesRequestMessage = v.InferOutput<
  typeof signMultipleMessagesRequestMessageSchema
>;
export type SignMultipleMessages = MethodParamsAndResult<
  v.InferOutput<typeof signMultipleMessagesParamsSchema>,
  v.InferOutput<typeof signMultipleMessagesResultSchema>
>;

// ---- V2 ----

export const bitcoinSignMultipleMessagesV2MethodName = 'bitcoin_signMultipleMessagesV2';

export const bitcoinSignMultipleMessagesV2ParamsSchema = v.array(
  v.object({
    /**
     * The address used for signing.
     **/
    address: v.string(),
    /**
     * The message to sign.
     **/
    message: v.string(),
    /**
     * The protocol to use to sign the message.
     *
     * If not specified, defaults to ECDSA if signing with a P2WPKH or P2SH address,
     * and to BIP322 if signing with a taproot address.
     */
    protocol: v.optional(v.enum(MessageSigningProtocols)),
  })
);
export type BitcoinSignMultipleMessagesV2Params = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2ParamsSchema
>;
export const bitcoinSignMultipleMessagesV2ResultSchema = v.array(
  v.object({
    /**
     * The signature of the message.
     */
    signature: v.string(),
    /**
     * The original message which was signed.
     */
    message: v.string(),
    /**
     * Hash of the message.
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
  })
);
export type BitcoinSignMultipleMessagesV2Result = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2ResultSchema
>;
export const bitcoinSignMultipleMessagesV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinSignMultipleMessagesV2MethodName),
    params: bitcoinSignMultipleMessagesV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type BitcoinSignMultipleMessagesV2RequestMessage = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2RequestMessageSchema
>;
export type BitcoinSignMultipleMessagesV2 = MethodParamsAndResult<
  v.InferOutput<typeof bitcoinSignMultipleMessagesV2ParamsSchema>,
  v.InferOutput<typeof bitcoinSignMultipleMessagesV2ResultSchema>
>;
