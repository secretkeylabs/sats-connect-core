import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';
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

export const sparkFlashnetSignIntentParamsSchema = v.union([
  sparkFlashnetSwapIntentSchema,
  sparkFlashnetRouteSwapIntentSchema,
  sparkFlashnetAddLiquidityIntentSchema,
  sparkFlashnetClawbackIntentSchema,
  sparkFlashnetConfirmInitialDepositIntentSchema,
  sparkFlashnetCreateConstantProductPoolIntentSchema,
  sparkFlashnetCreateSingleSidedPoolIntentSchema,
  sparkFlashnetRemoveLiquidityIntentSchema,
]);

export type SparkFlashnetSignIntentParams = v.InferOutput<
  typeof sparkFlashnetSignIntentParamsSchema
>;

export const sparkFlashnetSignIntentRequestSchema = createRequestSchema({
  paramsSchema: sparkFlashnetSignIntentParamsSchema,
  method: sparkMethods.spark_flashnet_signIntent,
});

export type SparkFlashnetSignIntentRequest = v.InferOutput<
  typeof sparkFlashnetSignIntentRequestSchema
>;
