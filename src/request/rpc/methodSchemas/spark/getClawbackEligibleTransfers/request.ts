import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkGetClawbackEligibleTransfersRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: sparkMethods.spark_getClawbackEligibleTransfers,
});

export type SparkGetClawbackEligibleTransfersRequest = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersRequestSchema
>;
