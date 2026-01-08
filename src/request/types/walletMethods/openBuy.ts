import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const openBuyMethodName = 'wallet_openBuy';
export const openBuyParamsSchema = v.object({
  asset: v.string(),
});
export type OpenBuyParams = v.InferOutput<typeof openBuyParamsSchema>;
export const openBuyResultSchema = v.nullish(v.null());
export type OpenBuyResult = v.InferOutput<typeof openBuyResultSchema>;
export const openBuyRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(openBuyMethodName),
    params: openBuyParamsSchema,
    id: v.string(),
  }).entries,
});
export type OpenBuyRequestMessage = v.InferOutput<typeof openBuyRequestMessageSchema>;
export type OpenBuy = MethodParamsAndResult<OpenBuyParams, OpenBuyResult>;
