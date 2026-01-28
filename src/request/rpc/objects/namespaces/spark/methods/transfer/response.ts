import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkTransferResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  id: v.string(),
});

export type SparkTransferResult = v.InferOutput<typeof sparkTransferResultSchema>;

export const sparkTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkTransferResultSchema,
  method: sparkMethods.spark_transfer,
});

export type SparkTransferSuccessResponse = v.InferOutput<typeof sparkTransferSuccessResponseSchema>;
