import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkGetClawbackEligibleTransfersResultSchema = v.object({
  eligibleTransfers: v.array(
    v.object({
      txId: v.string(),
      createdAt: v.string(),
      lpIdentityPublicKey: v.string(),
    })
  ),
});

export type SparkGetClawbackEligibleTransfersResult = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersResultSchema
>;

export const sparkGetClawbackEligibleTransfersSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkGetClawbackEligibleTransfersResultSchema,
  method: sparkMethods.spark_flashnet_getClawbackEligibleTransfers,
});

export type SparkGetClawbackEligibleTransfersSuccessResponse = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersSuccessResponseSchema
>;
