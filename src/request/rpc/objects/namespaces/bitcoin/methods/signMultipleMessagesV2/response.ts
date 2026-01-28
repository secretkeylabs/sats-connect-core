import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { MessageSigningProtocols } from '../../shared';

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

export const bitcoinSignMultipleMessagesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignMultipleMessagesV2ResultSchema,
  method: bitcoinMethods.bitcoin_signMultipleMessagesV2,
});

export type BitcoinSignMultipleMessagesV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2SuccessResponseSchema
>;
