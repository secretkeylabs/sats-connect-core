import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { walletTypeSchema } from '../common';

export const getWalletTypeMethodName = 'wallet_getWalletType';
export const getWalletTypeParamsSchema = v.nullish(v.null());
export type GetWalletTypeParams = v.InferOutput<typeof getWalletTypeParamsSchema>;
export const getWalletTypeResultSchema = walletTypeSchema;
export type GetWalletTypeResult = v.InferOutput<typeof getWalletTypeResultSchema>;
export const getWalletTypeRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getWalletTypeMethodName),
    params: getWalletTypeParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetWalletTypeRequestMessage = v.InferOutput<typeof getWalletTypeRequestMessageSchema>;
export type GetWalletType = MethodParamsAndResult<GetWalletTypeParams, GetWalletTypeResult>;
