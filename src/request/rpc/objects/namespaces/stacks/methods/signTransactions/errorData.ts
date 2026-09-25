import * as v from 'valibot';

/**
 * The `data` of the error response when a wallet stops broadcasting a batch
 * partway through. Lists every transaction of the request, in request order.
 */
export const stacksSignTransactionsBroadcastErrorDataSchema = v.object({
  transactions: v.array(
    v.object({
      index: v.number(),
      transaction: v.string(),
      status: v.picklist(['broadcast', 'failed', 'not_broadcast']),
      txid: v.optional(v.string()),
      error: v.optional(v.string()),
    })
  ),
});

export type StacksSignTransactionsBroadcastErrorData = v.InferOutput<
  typeof stacksSignTransactionsBroadcastErrorDataSchema
>;
