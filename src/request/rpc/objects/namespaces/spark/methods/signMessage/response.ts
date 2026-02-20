import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const sparkSignMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkSignMessageResultSchema,
  method: sparkMethods.spark_signMessage,
});

export type SparkSignMessageSuccessResponse = v.InferOutput<
  typeof sparkSignMessageSuccessResponseSchema
>;
