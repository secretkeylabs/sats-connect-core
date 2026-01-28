import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetClawbackFundsParamsSchema = v.object({
  sparkTransferId: v.string(),
  lpIdentityPublicKey: v.string(),
});

export type SparkFlashnetClawbackFundsParams = v.InferOutput<
  typeof sparkFlashnetClawbackFundsParamsSchema
>;

export const sparkFlashnetClawbackFundsRequestSchema = createRequestSchema({
  paramsSchema: sparkFlashnetClawbackFundsParamsSchema,
  method: sparkMethods.spark_flashnet_clawbackFunds,
});

export type SparkFlashnetClawbackFundsRequest = v.InferOutput<
  typeof sparkFlashnetClawbackFundsRequestSchema
>;
