import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkTransferParamsSchema = v.object({
  /**
   * Amount of SATS to transfer as a string or number.
   */
  amountSats: v.union([v.number(), v.string()]),
  /**
   * The recipient's spark address.
   */
  receiverSparkAddress: v.string(),
});

export type SparkTransferParams = v.InferOutput<typeof sparkTransferParamsSchema>;

export const sparkTransferRequestSchema = createRequestSchema({
  paramsSchema: sparkTransferParamsSchema,
  method: sparkMethods.spark_transfer,
});

export type SparkTransferRequest = v.InferOutput<typeof sparkTransferRequestSchema>;
