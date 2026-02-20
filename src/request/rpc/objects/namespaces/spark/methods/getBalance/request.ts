import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkGetBalanceParamsSchema = v.nullish(v.null());

export type SparkGetBalanceParams = v.InferOutput<typeof sparkGetBalanceParamsSchema>;

export const sparkGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: sparkGetBalanceParamsSchema,
  method: sparkMethods.spark_getBalance,
});

export type SparkGetBalanceRequest = v.InferOutput<typeof sparkGetBalanceRequestSchema>;
