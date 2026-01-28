import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';

export const bitcoinSignPsbtV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The base64 encoded PSBT after signing.
     */
    psbt: v.string(),
    /**
     * The transaction id as a hex-encoded string.
     * This is only returned if the transaction was broadcast.
     **/
    txid: v.optional(v.string()),
  }),
  method: bitcoinMethods.bitcoin_signPsbtV2,
});

export type BitcoinSignPsbtV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignPsbtV2SuccessResponseSchema
>;
