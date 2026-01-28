import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { MessageSigningProtocols } from '../../shared';

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

export const bitcoinSignMultipleMessagesV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignMultipleMessagesV2ParamsSchema,
  method: bitcoinMethods.bitcoin_signMultipleMessagesV2,
});

export type BitcoinSignMultipleMessagesV2Request = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2RequestSchema
>;
