import * as v from 'valibot';
import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { walletTypeSchema } from '../common';
import { getNetworksResultSchema } from './getNetworks';
import { getNetworkResultSchema } from './getNetwork';

export const getAccountMethodName = 'wallet_getAccount';
export const getAccountParamsSchema = v.nullish(v.null());
export type GetAccountParams = v.InferOutput<typeof getAccountParamsSchema>;
export const getAccountResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: getNetworkResultSchema,
});
export type GetAccountResult = v.InferOutput<typeof getAccountResultSchema>;
export const getAccountRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getAccountMethodName),
    params: getAccountParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetAccountRequestMessage = v.InferOutput<typeof getAccountRequestMessageSchema>;
export type GetAccount = MethodParamsAndResult<GetAccountParams, GetAccountResult>;

// ---- V2 ----

export const getAccountV2MethodName = 'wallet_getAccountV2';
export const getAccountV2ParamsSchema = v.nullish(v.null());
export type GetAccountV2Params = v.InferOutput<typeof getAccountV2ParamsSchema>;
export const getAccountV2ResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  networks: getNetworksResultSchema,
});
export type GetAccountV2Result = v.InferOutput<typeof getAccountV2ResultSchema>;
export const getAccountV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getAccountV2MethodName),
    params: getAccountV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetAccountV2RequestMessage = v.InferOutput<typeof getAccountV2RequestMessageSchema>;
export type GetAccountV2 = MethodParamsAndResult<GetAccountV2Params, GetAccountV2Result>;
