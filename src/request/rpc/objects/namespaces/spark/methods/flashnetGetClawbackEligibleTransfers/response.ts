import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';

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
  method: sparkMethods.spark_flashnet_getClawbackEligibleTransfers,
});

export type SparkGetClawbackEligibleTransfersSuccessResponse = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersSuccessResponseSchema
>;
