import * as v from 'valibot';
import { AddressPurpose, addressSchema } from '../../../addresses';
import { BitcoinNetworkType, MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { walletTypeSchema } from '../common';
import { PermissionRequestParams } from './common';
import { getNetworkResultSchema } from './getNetwork';
import { getNetworksResultSchema } from './getNetworks';

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(PermissionRequestParams)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
    network: v.optional(v.enum(BitcoinNetworkType)),
  })
);
export type ConnectParams = v.InferOutput<typeof connectParamsSchema>;
export const connectResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: getNetworkResultSchema,
});
export type ConnectResult = v.InferOutput<typeof connectResultSchema>;
export const connectRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(connectMethodName),
    params: connectParamsSchema,
    id: v.string(),
  }).entries,
});
export type ConnectRequestMessage = v.InferOutput<typeof connectRequestMessageSchema>;
export type Connect = MethodParamsAndResult<ConnectParams, ConnectResult>;

// ---- V2 ----

export const connectV2MethodName = 'wallet_connectV2';
export const connectV2ParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(PermissionRequestParams)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
    networkId: v.optional(v.string()),
  })
);
export type ConnectV2Params = v.InferOutput<typeof connectV2ParamsSchema>;
export const connectV2ResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  networks: getNetworksResultSchema,
});
export type ConnectV2Result = v.InferOutput<typeof connectV2ResultSchema>;
export const connectV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(connectV2MethodName),
    params: connectV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type ConnectV2RequestMessage = v.InferOutput<typeof connectV2RequestMessageSchema>;
export type ConnectV2 = MethodParamsAndResult<ConnectV2Params, ConnectV2Result>;
