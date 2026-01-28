import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkTransferTokenRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * Amount of units of the token to transfer as a string or number.
     */
    tokenAmount: v.union([v.number(), v.string()]),
    /**
     * The Bech32m token identifier.
     */
    tokenIdentifier: v.string(),
    /**
     * The recipient's spark address.
     */
    receiverSparkAddress: v.string(),
  }),
  method: sparkMethods.spark_transferToken,
});

export type SparkTransferTokenRequest = v.InferOutput<typeof sparkTransferTokenRequestSchema>;
