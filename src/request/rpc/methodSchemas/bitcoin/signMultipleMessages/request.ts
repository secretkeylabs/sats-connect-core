import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';

export enum MessageSigningProtocols {
  ECDSA = 'ECDSA',
  BIP322 = 'BIP322',
}

export const bitcoinSignMultipleMessagesRequestSchema = createRequestSchema({
  paramsSchema: v.array(
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
  ),
  method: bitcoinMethods.signMultipleMessages,
});

export type BitcoinSignMultipleMessagesRequest = v.InferOutput<
  typeof bitcoinSignMultipleMessagesRequestSchema
>;
