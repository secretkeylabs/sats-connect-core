import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSendTransferV2ParamsSchema = v.object({
  /**
   * Array of recipients to send to.
   * The amount to send to each recipient is in satoshis.
   */
  recipients: v.array(
    v.object({
      address: v.string(),
      amount: v.number(),
    })
  ),
});

export type BitcoinSendTransferV2Params = v.InferOutput<typeof bitcoinSendTransferV2ParamsSchema>;

export const bitcoinSendTransferV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinSendTransferV2ParamsSchema,
  method: bitcoinMethods.bitcoin_sendTransferV2,
});

export type BitcoinSendTransferV2Request = v.InferOutput<typeof bitcoinSendTransferV2RequestSchema>;
