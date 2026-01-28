import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkTransferRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * Amount of SATS to transfer as a string or number.
     */
    amountSats: v.union([v.number(), v.string()]),
    /**
     * The recipient's spark address.
     */
    receiverSparkAddress: v.string(),
  }),
  method: sparkMethods.spark_transfer,
});

export type SparkTransferRequest = v.InferOutput<typeof sparkTransferRequestSchema>;
