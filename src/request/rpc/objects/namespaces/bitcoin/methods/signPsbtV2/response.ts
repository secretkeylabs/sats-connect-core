import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSignPsbtV2ResultSchema = v.object({
  /**
   * The base64 encoded PSBT after signing.
   */
  psbt: v.string(),
  /**
   * The transaction id as a hex-encoded string.
   * This is only returned if the transaction was broadcast.
   **/
  txid: v.optional(v.string()),
});

export type BitcoinSignPsbtV2Result = v.InferOutput<typeof bitcoinSignPsbtV2ResultSchema>;

export const bitcoinSignPsbtV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignPsbtV2ResultSchema,
  method: bitcoinMethods.bitcoin_signPsbtV2,
});

export type BitcoinSignPsbtV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignPsbtV2SuccessResponseSchema
>;
