import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const runesTransferMethodName = 'runes_transfer';
export const runesTransferParamsSchema = v.object({
  recipients: v.array(
    v.object({
      runeName: v.string(),
      amount: v.string(),
      address: v.string(),
    })
  ),
});
export type TransferRunesParams = v.InferOutput<typeof runesTransferParamsSchema>;

export const runesTransferResultSchema = v.object({
  txid: v.string(),
});
export type RunesTransferResult = v.InferOutput<typeof runesTransferResultSchema>;

export const runesTransferRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(runesTransferMethodName),
    params: runesTransferParamsSchema,
    id: v.string(),
  }).entries,
});
export type RunesTransferRequestMessage = v.InferOutput<typeof runesTransferRequestMessageSchema>;

export type RunesTransfer = MethodParamsAndResult<TransferRunesParams, RunesTransferResult>;
