import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const sendTransferMethodName = 'sendTransfer';
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
export type SendTransferParams = v.InferOutput<typeof sendTransferParamsSchema>;
export const sendTransferResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
});
export type SendTransferResult = v.InferOutput<typeof sendTransferResultSchema>;
export const sendTransferRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sendTransferMethodName),
    params: sendTransferParamsSchema,
    id: v.string(),
  }).entries,
});
export type SendTransferRequestMessage = v.InferOutput<typeof sendTransferRequestMessageSchema>;
export type SendTransfer = MethodParamsAndResult<SendTransferParams, SendTransferResult>;
