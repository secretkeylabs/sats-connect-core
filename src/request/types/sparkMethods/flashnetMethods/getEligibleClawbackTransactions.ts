import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkGetEligibleClawbackTransactionsMethodName =
  'spark_flashnet_getEligibleClawbackTransactions';

export const sparkGetEligibleClawbackTransactionsParamsSchema = v.nullish(v.null());

export type SparkGetEligibleClawbackTransactionsParams = v.InferOutput<
  typeof sparkGetEligibleClawbackTransactionsParamsSchema
>;

export const sparkGetEligibleClawbackTransactionsResultSchema = v.array(
  v.object({
    txId: v.string(),
    createdAt: v.string(),
    lpIdentityPublicKey: v.string(),
  })
);
export type SparkGetEligibleClawbackTransactionsResult = v.InferOutput<
  typeof sparkGetEligibleClawbackTransactionsResultSchema
>;

export const sparkGetEligibleClawbackTransactionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkGetEligibleClawbackTransactionsMethodName),
    params: sparkGetEligibleClawbackTransactionsParamsSchema,
    id: v.string(),
  }).entries,
});

export type SparkGetEligibleClawbackTransactionsRequestMessage = v.InferOutput<
  typeof sparkGetEligibleClawbackTransactionsRequestMessageSchema
>;

export type SparkGetEligibleClawbackTransactions = MethodParamsAndResult<
  v.InferOutput<typeof sparkGetEligibleClawbackTransactionsParamsSchema>,
  v.InferOutput<typeof sparkGetEligibleClawbackTransactionsResultSchema>
>;
