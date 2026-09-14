import * as v from 'valibot';

export const sendTransferParamsSchema = v.object({
  /**
   * Array of recipients to send to.
   * The amount to send to each recipient is in satoshis.
   */
  recipients: v.array(
    v.object({
      address: v.string(),
      amount: v.number(),
    })
  ),
  /**
   * Whether the wallet should broadcast the transaction after signing.
   * Defaults to `true`. When `false`, the wallet signs the transaction and
   * returns it in the result without broadcasting it.
   */
  broadcast: v.optional(v.boolean()),
});

export const sendTransferResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
  /**
   * The signed transaction as a hex-encoded string.
   * Older wallet versions may omit this field.
   */
  transaction: v.optional(v.string()),
});
