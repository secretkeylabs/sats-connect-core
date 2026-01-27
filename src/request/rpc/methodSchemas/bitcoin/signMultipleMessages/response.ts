import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';

export enum MessageSigningProtocols {
  ECDSA = 'ECDSA',
  BIP322 = 'BIP322',
}

export const bitcoinSignMultipleMessagesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.array(
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
  ),
  method: bitcoinMethods.signMultipleMessages,
});

export type BitcoinSignMultipleMessagesSuccessResponse = v.InferOutput<
  typeof bitcoinSignMultipleMessagesSuccessResponseSchema
>;
