import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';

export const bitcoinSignPsbtSuccessResponseSchema = createSuccessResponseSchema({
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
  method: bitcoinMethods.signPsbt,
});

export type BitcoinSignPsbtSuccessResponse = v.InferOutput<
  typeof bitcoinSignPsbtSuccessResponseSchema
>;
