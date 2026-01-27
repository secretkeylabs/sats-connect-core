import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';

export const bitcoinSendTransferV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The transaction id as a hex-encoded string.
     */
    txid: v.string(),
  }),
  method: bitcoinMethods.bitcoin_sendTransferV2,
});

export type BitcoinSendTransferV2SuccessResponse = v.InferOutput<
  typeof bitcoinSendTransferV2SuccessResponseSchema
>;
