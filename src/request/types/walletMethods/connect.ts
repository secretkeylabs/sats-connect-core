import * as v from 'valibot';
import { AddressPurpose, addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { walletTypeSchema } from '../common';
import { PermissionRequestParams } from './common';
import { getNetworksResultSchema } from '../walletMethods.gitignore';

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(PermissionRequestParams)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
    networkId: v.optional(v.string()),
  })
);
export type ConnectParams = v.InferOutput<typeof connectParamsSchema>;
export const connectResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  networks: getNetworksResultSchema,
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
