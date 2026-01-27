import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';

export const bitcoinSendTransferRequestSchema = createRequestSchema({
  paramsSchema: v.object({
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
  }),
  method: bitcoinMethods.sendTransfer,
});

export type BitcoinSendTransferRequest = v.InferOutput<typeof bitcoinSendTransferRequestSchema>;
