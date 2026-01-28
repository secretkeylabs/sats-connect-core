import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import {
  sparkFlashnetAddLiquidityIntentSchema,
  sparkFlashnetClawbackIntentSchema,
  sparkFlashnetConfirmInitialDepositIntentSchema,
  sparkFlashnetCreateConstantProductPoolIntentSchema,
  sparkFlashnetCreateSingleSidedPoolIntentSchema,
  sparkFlashnetRemoveLiquidityIntentSchema,
  sparkFlashnetRouteSwapIntentSchema,
  sparkFlashnetSwapIntentSchema,
} from './intents';

export const sparkFlashnetSignIntentRequestSchema = createRequestSchema({
  paramsSchema: v.union([
    sparkFlashnetSwapIntentSchema,
    sparkFlashnetRouteSwapIntentSchema,
    sparkFlashnetAddLiquidityIntentSchema,
    sparkFlashnetClawbackIntentSchema,
    sparkFlashnetConfirmInitialDepositIntentSchema,
    sparkFlashnetCreateConstantProductPoolIntentSchema,
    sparkFlashnetCreateSingleSidedPoolIntentSchema,
    sparkFlashnetRemoveLiquidityIntentSchema,
  ]),
  method: sparkMethods.spark_flashnet_signIntent,
});

export type SparkFlashnetSignIntentRequest = v.InferOutput<
  typeof sparkFlashnetSignIntentRequestSchema
>;
