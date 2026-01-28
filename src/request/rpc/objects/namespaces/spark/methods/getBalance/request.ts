import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: sparkMethods.spark_getBalance,
});

export type SparkGetBalanceRequest = v.InferOutput<typeof sparkGetBalanceRequestSchema>;
