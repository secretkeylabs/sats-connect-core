import { addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';
import { getNetworkResultSchema } from '../walletMethods';

export const stxGetAddressesMethodName = 'stx_getAddresses';
export const stxGetAddressesParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type StxGetAddressesParams = v.InferOutput<typeof stxGetAddressesParamsSchema>;
export const stxGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: getNetworkResultSchema,
});
export type StxGetAddressesResult = v.InferOutput<typeof stxGetAddressesResultSchema>;
export const stxGetAddressesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxGetAddressesMethodName),
    params: stxGetAddressesParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxGetAddressesRequestMessage = v.InferOutput<
  typeof stxGetAddressesRequestMessageSchema
>;
export type StxGetAddresses = MethodParamsAndResult<
  v.InferOutput<typeof stxGetAddressesParamsSchema>,
  v.InferOutput<typeof stxGetAddressesResultSchema>
>;
