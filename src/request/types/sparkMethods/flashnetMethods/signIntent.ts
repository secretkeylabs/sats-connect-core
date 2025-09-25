import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';
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

export const sparkFlashnetSignIntentMethodName = 'spark_flashnet_signIntent';

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

export const sparkFlashnetSignIntentResultSchema = v.object({
  /**
   * The signed intent as a hex string.
   */
  signature: v.string(),
});
export type SparkFlashnetSignIntentResult = v.InferOutput<
  typeof sparkFlashnetSignIntentResultSchema
>;

export const sparkFlashnetSignIntentRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetSignIntentMethodName),
    params: sparkFlashnetSignIntentParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetSignIntentRequestMessage = v.InferOutput<
  typeof sparkFlashnetSignIntentRequestMessageSchema
>;

export type SparkFlashnetSignIntent = MethodParamsAndResult<
  SparkFlashnetSignIntentParams,
  SparkFlashnetSignIntentResult
>;
