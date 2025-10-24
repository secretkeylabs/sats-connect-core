import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetExecuteSwapMethodName = 'spark_flashnet_executeSwap';

export const sparkFlashnetExecuteSwapParamsSchema = v.object({
  poolId: v.string(),
  assetInAddress: v.string(),
  assetOutAddress: v.string(),
  amountIn: v.string(),
  maxSlippageBps: v.number(),
  minAmountOut: v.string(),
  integratorFeeRateBps: v.optional(v.number()),
  integratorPublicKey: v.optional(v.string()),
});
export type SparkFlashnetExecuteSwapParams = v.InferOutput<
  typeof sparkFlashnetExecuteSwapParamsSchema
>;

export const sparkFlashnetExecuteSwapResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  amountOut: v.optional(v.string()),
  feeAmount: v.optional(v.string()),
  executionPrice: v.optional(v.string()),
  assetOutAddress: v.optional(v.string()),
  assetInAddress: v.optional(v.string()),
  outboundTransferId: v.optional(v.string()),
  error: v.optional(v.string()),
});
export type SparkFlashnetExecuteSwapResult = v.InferOutput<
  typeof sparkFlashnetExecuteSwapResultSchema
>;

export const sparkFlashnetExecuteSwapRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetExecuteSwapMethodName),
    params: sparkFlashnetExecuteSwapParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetExecuteSwapRequestMessage = v.InferOutput<
  typeof sparkFlashnetExecuteSwapRequestMessageSchema
>;

export type SparkFlashnetExecuteSwap = MethodParamsAndResult<
  SparkFlashnetExecuteSwapParams,
  SparkFlashnetExecuteSwapResult
>;
