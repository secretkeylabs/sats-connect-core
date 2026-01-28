import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSignPsbtResultSchema = v.object({
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

export type BitcoinSignPsbtResult = v.InferOutput<typeof bitcoinSignPsbtResultSchema>;

export const bitcoinSignPsbtSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignPsbtResultSchema,
  method: bitcoinMethods.signPsbt,
});

export type BitcoinSignPsbtSuccessResponse = v.InferOutput<
  typeof bitcoinSignPsbtSuccessResponseSchema
>;
