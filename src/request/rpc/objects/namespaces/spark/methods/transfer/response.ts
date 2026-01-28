import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The ID of the transaction.
     */
    id: v.string(),
  }),
  method: sparkMethods.spark_transfer,
});

export type SparkTransferSuccessResponse = v.InferOutput<typeof sparkTransferSuccessResponseSchema>;
