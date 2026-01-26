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

// ---- V2 ----

export const bitcoinSendTransferV2MethodName = 'bitcoin_sendTransferV2';
export const bitcoinSendTransferV2ParamsSchema = v.object({
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
export type BitcoinSendTransferV2Params = v.InferOutput<typeof bitcoinSendTransferV2ParamsSchema>;
export const bitcoinSendTransferV2ResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
});
export type BitcoinSendTransferV2Result = v.InferOutput<typeof bitcoinSendTransferV2ResultSchema>;
export const bitcoinSendTransferV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinSendTransferV2MethodName),
    params: bitcoinSendTransferV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type BitcoinSendTransferV2RequestMessage = v.InferOutput<
  typeof bitcoinSendTransferV2RequestMessageSchema
>;
export type BitcoinSendTransferV2 = MethodParamsAndResult<
  BitcoinSendTransferV2Params,
  BitcoinSendTransferV2Result
>;
