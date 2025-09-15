import * as v from 'valibot';
import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
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
