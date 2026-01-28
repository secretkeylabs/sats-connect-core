import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSendTransferV2ResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
});

export type BitcoinSendTransferV2Result = v.InferOutput<typeof bitcoinSendTransferV2ResultSchema>;

export const bitcoinSendTransferV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSendTransferV2ResultSchema,
  method: bitcoinMethods.bitcoin_sendTransferV2,
});

export type BitcoinSendTransferV2SuccessResponse = v.InferOutput<
  typeof bitcoinSendTransferV2SuccessResponseSchema
>;
