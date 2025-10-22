import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const sparkSignMessageMethodName = 'spark_signMessage';

export const sparkSignMessageParamsSchema = v.object({
  /**
   * The message to sign. The message should only consist of valid UTF-8 characters.
   */
  message: v.string(),
});
export type SparkSignMessageParams = v.InferOutput<typeof sparkSignMessageParamsSchema>;

export const sparkSignMessageResultSchema = v.object({
  /**
   * The signature, encoded in base64, of the message hash.
   *
   * Note: When signing, the message is decoded into a byte array,
   * and the resulting byte array is hashed with SHA256 before signing
   * with the private key.
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
