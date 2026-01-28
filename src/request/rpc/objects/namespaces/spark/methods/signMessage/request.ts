import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkSignMessageRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * The message to sign. The message should only consist of valid UTF-8 characters.
     */
    message: v.string(),
  }),
  method: sparkMethods.spark_signMessage,
});

export type SparkSignMessageRequest = v.InferOutput<typeof sparkSignMessageRequestSchema>;
