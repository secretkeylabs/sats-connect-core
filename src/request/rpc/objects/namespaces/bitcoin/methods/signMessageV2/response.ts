import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { MessageSigningProtocols } from '../../shared';

export const bitcoinSignMessageV2SuccessResponseSchema = createSuccessResponseSchema({
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
  method: bitcoinMethods.bitcoin_signMessageV2,
});

export type BitcoinSignMessageV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignMessageV2SuccessResponseSchema
>;
