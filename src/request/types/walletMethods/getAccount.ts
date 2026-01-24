import * as v from 'valibot';
import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { walletTypeSchema } from '../common';
import { getNetworksResultSchema } from './getNetworks';

export const getAccountMethodName = 'wallet_getAccount';
export const getAccountParamsSchema = v.nullish(v.null());
export type GetAccountParams = v.InferOutput<typeof getAccountParamsSchema>;
export const getAccountResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  networks: getNetworksResultSchema,
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
