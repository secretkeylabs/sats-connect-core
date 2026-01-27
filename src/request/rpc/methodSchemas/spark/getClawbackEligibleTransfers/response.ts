import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { sparkMethods } from '../../../../methods';

export const sparkGetClawbackEligibleTransfersSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    eligibleTransfers: v.array(
      v.object({
        txId: v.string(),
        createdAt: v.string(),
        lpIdentityPublicKey: v.string(),
      })
    ),
  }),
  method: sparkMethods.spark_getClawbackEligibleTransfers,
});

export type SparkGetClawbackEligibleTransfersSuccessResponse = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersSuccessResponseSchema
>;
