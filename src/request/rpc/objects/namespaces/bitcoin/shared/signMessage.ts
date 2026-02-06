import * as v from 'valibot';
import { MessageSigningProtocols } from '.';

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
