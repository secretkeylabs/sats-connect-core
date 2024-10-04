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

export const runesTransferRequestSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(runesTransferMethodName),
    params: runesTransferParamsSchema,
    id: v.string(),
  }).entries,
});
export type RunesTransferRequest = v.InferOutput<typeof runesTransferRequestSchema>;

export type RunesTransfer = MethodParamsAndResult<TransferRunesParams, RunesTransferResult>;
