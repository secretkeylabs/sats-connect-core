import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkGetClawbackEligibleTransfersParamsSchema = v.nullish(v.null());

export type SparkGetClawbackEligibleTransfersParams = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersParamsSchema
>;

export const sparkGetClawbackEligibleTransfersRequestSchema = createRequestSchema({
  paramsSchema: sparkGetClawbackEligibleTransfersParamsSchema,
  method: sparkMethods.spark_flashnet_getClawbackEligibleTransfers,
});

export type SparkGetClawbackEligibleTransfersRequest = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersRequestSchema
>;
