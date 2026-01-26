import * as v from 'valibot';
import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { sparkNetworkConfigurationSchema } from '../walletMethods/utils';
import { getNetworkResultSchema } from '../walletMethods';

export const sparkGetAddressesMethodName = 'spark_getAddresses';
export const sparkGetAddressesParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type SparkGetAddressesParams = v.InferOutput<typeof sparkGetAddressesParamsSchema>;
export const sparkGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: getNetworkResultSchema,
});
export type SparkGetAddressesResult = v.InferOutput<typeof sparkGetAddressesResultSchema>;
export const sparkGetAddressesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkGetAddressesMethodName),
    params: sparkGetAddressesParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkGetAddressesRequestMessage = v.InferOutput<
  typeof sparkGetAddressesRequestMessageSchema
>;
export type SparkGetAddresses = MethodParamsAndResult<
  v.InferOutput<typeof sparkGetAddressesParamsSchema>,
  v.InferOutput<typeof sparkGetAddressesResultSchema>
>;

// ---- V2 ----

export const sparkGetAddressesV2MethodName = 'spark_getAddressesV2';
export const sparkGetAddressesV2ParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type SparkGetAddressesV2Params = v.InferOutput<typeof sparkGetAddressesV2ParamsSchema>;
export const sparkGetAddressesV2ResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: sparkNetworkConfigurationSchema,
});
export type SparkGetAddressesV2Result = v.InferOutput<typeof sparkGetAddressesV2ResultSchema>;
export const sparkGetAddressesV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkGetAddressesV2MethodName),
    params: sparkGetAddressesV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkGetAddressesV2RequestMessage = v.InferOutput<
  typeof sparkGetAddressesV2RequestMessageSchema
>;
export type SparkGetAddressesV2 = MethodParamsAndResult<
  v.InferOutput<typeof sparkGetAddressesV2ParamsSchema>,
  v.InferOutput<typeof sparkGetAddressesV2ResultSchema>
>;
