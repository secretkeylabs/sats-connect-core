import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: sparkMethods.spark_getBalance,
});

export type SparkGetBalanceRequest = v.InferOutput<typeof sparkGetBalanceRequestSchema>;
