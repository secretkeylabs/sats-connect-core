import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const sparkTransferMethodName = 'spark_transfer';

export const sparkTransferParamsSchema = v.object({
  /**
   * Amount of SATS to transfer as a string or number.
   */
  amountSats: v.union([v.number(), v.string()]),
  /**
   * The recipient's spark address.
   */
  receiverSparkAddress: v.string(),
});
export type SparkTransferParams = v.InferOutput<typeof sparkTransferParamsSchema>;

export const sparkTransferResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  id: v.string(),
});
export type SparkTransferResult = v.InferOutput<typeof sparkTransferResultSchema>;

export const sparkTransferRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkTransferMethodName),
    params: sparkTransferParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkTransferRequestMessage = v.InferOutput<typeof sparkTransferRequestMessageSchema>;

export type SparkTransfer = MethodParamsAndResult<SparkTransferParams, SparkTransferResult>;
