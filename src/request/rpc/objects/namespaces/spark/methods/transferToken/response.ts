import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkTransferTokenResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  id: v.string(),
});

export type SparkTransferTokenResult = v.InferOutput<typeof sparkTransferTokenResultSchema>;

export const sparkTransferTokenSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkTransferTokenResultSchema,
  method: sparkMethods.spark_transferToken,
});

export type SparkTransferTokenSuccessResponse = v.InferOutput<
  typeof sparkTransferTokenSuccessResponseSchema
>;
