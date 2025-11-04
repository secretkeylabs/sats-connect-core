import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetExecuteRouteSwapMethodName = 'spark_flashnet_executeRouteSwap';

export const sparkFlashnetExecuteRouteSwapParamsSchema = v.object({
  hops: v.array(
    v.object({
      poolId: v.string(),
      assetInAddress: v.string(),
      assetOutAddress: v.string(),
      hopIntegratorFeeRateBps: v.optional(v.number()),
    })
  ),
  initialAssetAddress: v.string(),
  inputAmount: v.string(),
  maxRouteSlippageBps: v.string(),
  minAmountOut: v.optional(v.string()),
  integratorFeeRateBps: v.optional(v.number()),
  integratorPublicKey: v.optional(v.string()),
});
export type SparkFlashnetExecuteRouteSwapParams = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapParamsSchema
>;

export const sparkFlashnetExecuteRouteSwapResultSchema = v.object({
  requestId: v.string(),
  accepted: v.boolean(),
  outputAmount: v.string(),
  executionPrice: v.string(),
  finalOutboundTransferId: v.string(),
  error: v.optional(v.string()),
});
export type SparkFlashnetExecuteRouteSwapResult = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapResultSchema
>;

export const sparkFlashnetExecuteRouteSwapRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetExecuteRouteSwapMethodName),
    params: sparkFlashnetExecuteRouteSwapParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetExecuteRouteSwapRequestMessage = v.InferOutput<
  typeof sparkFlashnetExecuteRouteSwapRequestMessageSchema
>;

export type SparkFlashnetExecuteRouteSwap = MethodParamsAndResult<
  SparkFlashnetExecuteRouteSwapParams,
  SparkFlashnetExecuteRouteSwapResult
>;
