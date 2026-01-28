import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkGetClawbackEligibleTransfersRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: sparkMethods.spark_flashnet_getClawbackEligibleTransfers,
});

export type SparkGetClawbackEligibleTransfersRequest = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersRequestSchema
>;
