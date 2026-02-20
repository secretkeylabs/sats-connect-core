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
});

export const sendTransferResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
});
