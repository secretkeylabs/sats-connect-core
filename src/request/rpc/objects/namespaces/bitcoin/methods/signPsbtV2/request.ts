import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';

export const bitcoinSignPsbtV2RequestSchema = createRequestSchema({
  paramsSchema: v.object({
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
  }),
  method: bitcoinMethods.bitcoin_signPsbtV2,
});

export type BitcoinSignPsbtV2Request = v.InferOutput<typeof bitcoinSignPsbtV2RequestSchema>;
