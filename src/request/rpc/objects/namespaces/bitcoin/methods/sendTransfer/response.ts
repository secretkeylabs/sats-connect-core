import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';

export const bitcoinSendTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The transaction id as a hex-encoded string.
     */
    txid: v.string(),
  }),
  method: bitcoinMethods.sendTransfer,
});

export type BitcoinSendTransferSuccessResponse = v.InferOutput<
  typeof bitcoinSendTransferSuccessResponseSchema
>;
