import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const sparkTransferTokenMethodName = 'spark_transferToken';

export const sparkTransferTokenParamsSchema = v.object({
  /**
   * Amount of units of the token to transfer as a string or number.
   */
  tokenAmount: v.union([v.number(), v.string()]),
  /**
   * The Bech32m token identifier.
   */
  tokenIdentifier: v.string(),
  /**
   * The recipient's spark address.
   */
  receiverSparkAddress: v.string(),
});
export type SparkTransferTokenParams = v.InferOutput<typeof sparkTransferTokenParamsSchema>;

export const sparkTransferTokenResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  id: v.string(),
});
export type SparkTransferTokenResult = v.InferOutput<typeof sparkTransferTokenResultSchema>;

export const sparkTransferTokenRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkTransferTokenMethodName),
    params: sparkTransferTokenParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkTransferTokenRequestMessage = v.InferOutput<
  typeof sparkTransferTokenRequestMessageSchema
>;

export type SparkTransferToken = MethodParamsAndResult<
  SparkTransferTokenParams,
  SparkTransferTokenResult
>;
