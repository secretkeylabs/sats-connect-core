import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSendTransferResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
});

export type BitcoinSendTransferResult = v.InferOutput<typeof bitcoinSendTransferResultSchema>;

export const bitcoinSendTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSendTransferResultSchema,
  method: bitcoinMethods.sendTransfer,
});

export type BitcoinSendTransferSuccessResponse = v.InferOutput<
  typeof bitcoinSendTransferSuccessResponseSchema
>;
