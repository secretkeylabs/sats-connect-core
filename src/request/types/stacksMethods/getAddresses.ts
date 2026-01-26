import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';
import { stacksNetworkConfigurationSchema } from '../walletMethods/utils';
import { getNetworkResultSchema } from '../walletMethods';

export const stacksGetAddressesMethodName = 'stx_getAddresses';
export const stacksGetAddressesParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type StacksGetAddressesParams = v.InferOutput<typeof stacksGetAddressesParamsSchema>;
export const stacksGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: getNetworkResultSchema,
});
export type StacksGetAddressesResult = v.InferOutput<typeof stacksGetAddressesResultSchema>;
export const stacksGetAddressesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksGetAddressesMethodName),
    params: stacksGetAddressesParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksGetAddressesRequestMessage = v.InferOutput<
  typeof stacksGetAddressesRequestMessageSchema
>;
export type StacksGetAddresses = MethodParamsAndResult<
  v.InferOutput<typeof stacksGetAddressesParamsSchema>,
  v.InferOutput<typeof stacksGetAddressesResultSchema>
>;

// ---- V2 ----

export const stacksGetAddressesV2MethodName = 'stacks_getAddressesV2';
export const stacksGetAddressesV2ParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type StacksGetAddressesV2Params = v.InferOutput<typeof stacksGetAddressesV2ParamsSchema>;
export const stacksGetAddressesV2ResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: stacksNetworkConfigurationSchema,
});
export type StacksGetAddressesV2Result = v.InferOutput<typeof stacksGetAddressesV2ResultSchema>;
export const stacksGetAddressesV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksGetAddressesV2MethodName),
    params: stacksGetAddressesV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksGetAddressesV2RequestMessage = v.InferOutput<
  typeof stacksGetAddressesV2RequestMessageSchema
>;
export type StacksGetAddressesV2 = MethodParamsAndResult<
  v.InferOutput<typeof stacksGetAddressesV2ParamsSchema>,
  v.InferOutput<typeof stacksGetAddressesV2ResultSchema>
>;
