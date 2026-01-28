import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkSignMessageParamsSchema = v.object({
  /**
   * The message to sign. The message should only consist of valid UTF-8 characters.
   */
  message: v.string(),
});

export type SparkSignMessageParams = v.InferOutput<typeof sparkSignMessageParamsSchema>;

export const sparkSignMessageRequestSchema = createRequestSchema({
  paramsSchema: sparkSignMessageParamsSchema,
  method: sparkMethods.spark_signMessage,
});

export type SparkSignMessageRequest = v.InferOutput<typeof sparkSignMessageRequestSchema>;
