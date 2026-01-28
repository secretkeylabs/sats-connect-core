import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkSignMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The signature, encoded in base64, of the message hash.
     *
     * Note: When signing, the message is decoded into a byte array,
     * and the resulting byte array is hashed with SHA256 before signing
     * with the private key.
     */
    signature: v.string(),
  }),
  method: sparkMethods.spark_signMessage,
});

export type SparkSignMessageSuccessResponse = v.InferOutput<
  typeof sparkSignMessageSuccessResponseSchema
>;
