import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSendTransferParamsSchema = v.object({
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

export type BitcoinSendTransferParams = v.InferOutput<typeof bitcoinSendTransferParamsSchema>;

export const bitcoinSendTransferRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSendTransferParamsSchema,
  method: bitcoinMethods.sendTransfer,
});

export type BitcoinSendTransferRequest = v.InferOutput<typeof bitcoinSendTransferRequestSchema>;
