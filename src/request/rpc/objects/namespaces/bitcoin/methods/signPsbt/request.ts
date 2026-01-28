import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinSignPsbtParamsSchema = v.object({
  /**
   * The base64 encoded PSBT to sign.
   */
  psbt: v.string(),
  /**
   * The inputs to sign.
   * The key is the address and the value is an array of indexes of the inputs to sign.
   */
  signInputs: v.optional(v.record(v.string(), v.array(v.number()))),
  /**
   * Whether to broadcast the transaction after signing.
   **/
  broadcast: v.optional(v.boolean()),
});

export type BitcoinSignPsbtParams = v.InferOutput<typeof bitcoinSignPsbtParamsSchema>;

export const bitcoinSignPsbtRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignPsbtParamsSchema,
  method: bitcoinMethods.signPsbt,
});

export type BitcoinSignPsbtRequest = v.InferOutput<typeof bitcoinSignPsbtRequestSchema>;
