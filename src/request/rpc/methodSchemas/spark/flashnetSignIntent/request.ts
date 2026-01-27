import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';
import {
  sparkFlashnetAddLiquidityIntentSchema,
  sparkFlashnetClawbackIntentSchema,
  sparkFlashnetConfirmInitialDepositIntentSchema,
  sparkFlashnetCreateConstantProductPoolIntentSchema,
  sparkFlashnetCreateSingleSidedPoolIntentSchema,
  sparkFlashnetRemoveLiquidityIntentSchema,
  sparkFlashnetRouteSwapIntentSchema,
  sparkFlashnetSwapIntentSchema,
} from '../../../../types/sparkMethods/flashnetMethods/intents';

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
