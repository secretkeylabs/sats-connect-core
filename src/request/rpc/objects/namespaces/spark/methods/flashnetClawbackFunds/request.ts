import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkFlashnetClawbackFundsRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    sparkTransferId: v.string(),
    lpIdentityPublicKey: v.string(),
  }),
  method: sparkMethods.spark_flashnet_clawbackFunds,
});

export type SparkFlashnetClawbackFundsRequest = v.InferOutput<
  typeof sparkFlashnetClawbackFundsRequestSchema
>;
