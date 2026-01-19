import * as v from 'valibot';
import {
  BitcoinNetworkType,
  MethodParamsAndResult,
  rpcRequestMessageSchema,
  SparkNetworkType,
  StacksNetworkType,
} from '../../../types';

export const getNetworkMethodName = 'wallet_getNetwork';
export const getNetworkParamsSchema = v.nullish(v.null());
export type GetNetworkParams = v.InferOutput<typeof getNetworkParamsSchema>;
export const getNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.enum(BitcoinNetworkType),
  }),
  stacks: v.object({
    name: v.enum(StacksNetworkType),
  }),
  spark: v.object({
    name: v.enum(SparkNetworkType),
  }),
});
export type GetNetworkResult = v.InferOutput<typeof getNetworkResultSchema>;
export const getNetworkRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getNetworkMethodName),
    params: getNetworkParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetNetworkRequestMessage = v.InferOutput<typeof getNetworkRequestMessageSchema>;
export type GetNetwork = MethodParamsAndResult<GetNetworkParams, GetNetworkResult>;
