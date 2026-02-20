import * as v from 'valibot';

export const signPsbtParamsSchema = v.object({
  /**
   * The base64 encoded PSBT to sign.
   */
  psbt: v.string(),
  /**
   * The inputs to sign. Each key in the object should be an address and its
   * value an array of indexes of the inputs to sign.
   */
  signInputs: v.optional(v.record(v.string(), v.array(v.number()))),
  /**
   * Whether to broadcast the transaction after signing. Defaults to `false`.
   */
  broadcast: v.optional(v.boolean(), false),
});

export const signPsbtResultSchema = v.object({
  /**
   * The base64 encoded PSBT after signing.
   */
  psbt: v.string(),
  /**
   * The transaction id as a hex-encoded string. This is only returned if the
   * transaction was broadcast.
   */
  txid: v.optional(v.string()),
});
