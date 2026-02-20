import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkTransferTokenParamsSchema = v.object({
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
});

export type SparkTransferTokenParams = v.InferOutput<typeof sparkTransferTokenParamsSchema>;

export const sparkTransferTokenRequestSchema = createRequestSchema({
  paramsSchema: sparkTransferTokenParamsSchema,
  method: sparkMethods.spark_transferToken,
});

export type SparkTransferTokenRequest = v.InferOutput<typeof sparkTransferTokenRequestSchema>;
