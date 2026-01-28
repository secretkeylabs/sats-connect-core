import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { MessageSigningProtocols } from '../../shared';

export const bitcoinSignMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
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
  }),
  method: bitcoinMethods.signMessage,
});

export type BitcoinSignMessageSuccessResponse = v.InferOutput<
  typeof bitcoinSignMessageSuccessResponseSchema
>;
