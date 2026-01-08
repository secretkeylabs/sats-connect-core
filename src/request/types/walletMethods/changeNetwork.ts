import * as v from 'valibot';
import { BitcoinNetworkType, MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const changeNetworkMethodName = 'wallet_changeNetwork';
export const changeNetworkParamsSchema = v.object({
  name: v.enum(BitcoinNetworkType),
});
export type ChangeNetworkParams = v.InferOutput<typeof changeNetworkParamsSchema>;
export const changeNetworkResultSchema = v.nullish(v.null());
export type ChangeNetworkResult = v.InferOutput<typeof changeNetworkResultSchema>;
export const changeNetworkRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(changeNetworkMethodName),
    params: changeNetworkParamsSchema,
    id: v.string(),
  }).entries,
});
export type ChangeNetworkRequestMessage = v.InferOutput<typeof changeNetworkRequestMessageSchema>;
export type ChangeNetwork = MethodParamsAndResult<ChangeNetworkParams, ChangeNetworkResult>;
