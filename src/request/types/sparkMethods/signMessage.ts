import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const sparkSignMessageMethodName = 'spark_signMessage';

export const sparkSignMessageParamsSchema = v.object({
  message: v.string(),
});
export type SparkSignMessageParams = v.InferOutput<typeof sparkSignMessageParamsSchema>;

export const sparkSignMessageResultSchema = v.object({
  /**
   * The signature for the message in hex format
   */
  signature: v.string(),
});
export type SparkSignMessageResult = v.InferOutput<typeof sparkSignMessageResultSchema>;

export const sparkSignMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkSignMessageMethodName),
    params: sparkSignMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkSignMessageRequestMessage = v.InferOutput<
  typeof sparkSignMessageRequestMessageSchema
>;

export type SparkSignMessage = MethodParamsAndResult<
  SparkSignMessageParams,
  SparkSignMessageResult
>;
