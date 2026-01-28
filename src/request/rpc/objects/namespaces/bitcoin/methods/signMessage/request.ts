import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { MessageSigningProtocols } from '../../shared';

export const bitcoinSignMessageParamsSchema = v.object({
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

export type BitcoinSignMessageParams = v.InferOutput<typeof bitcoinSignMessageParamsSchema>;

export const bitcoinSignMessageRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignMessageParamsSchema,
  method: bitcoinMethods.signMessage,
});

export type BitcoinSignMessageRequest = v.InferOutput<typeof bitcoinSignMessageRequestSchema>;
