import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkGetClawbackEligibleTransfersMethodName =
  'spark_flashnet_getClawbackEligibleTransfers';

export const sparkGetClawbackEligibleTransfersParamsSchema = v.nullish(v.null());

export type SparkGetClawbackEligibleTransfersParams = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersParamsSchema
>;

export const sparkGetClawbackEligibleTransfersResultSchema = v.array(
  v.object({
    txId: v.string(),
    createdAt: v.string(),
    lpIdentityPublicKey: v.string(),
  })
);
export type SparkGetClawbackEligibleTransfersResult = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersResultSchema
>;

export const sparkGetClawbackEligibleTransfersRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkGetClawbackEligibleTransfersMethodName),
    params: sparkGetClawbackEligibleTransfersParamsSchema,
    id: v.string(),
  }).entries,
});

export type SparkGetClawbackEligibleTransfersRequestMessage = v.InferOutput<
  typeof sparkGetClawbackEligibleTransfersRequestMessageSchema
>;

export type SparkGetClawbackEligibleTransfers = MethodParamsAndResult<
  v.InferOutput<typeof sparkGetClawbackEligibleTransfersParamsSchema>,
  v.InferOutput<typeof sparkGetClawbackEligibleTransfersResultSchema>
>;
