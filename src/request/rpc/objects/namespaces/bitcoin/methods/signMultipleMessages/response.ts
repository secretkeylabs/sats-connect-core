import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { MessageSigningProtocols } from '../../shared';

export const bitcoinSignMultipleMessagesResultSchema = v.array(
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

export type BitcoinSignMultipleMessagesResult = v.InferOutput<
  typeof bitcoinSignMultipleMessagesResultSchema
>;

export const bitcoinSignMultipleMessagesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignMultipleMessagesResultSchema,
  method: bitcoinMethods.signMultipleMessages,
});

export type BitcoinSignMultipleMessagesSuccessResponse = v.InferOutput<
  typeof bitcoinSignMultipleMessagesSuccessResponseSchema
>;
