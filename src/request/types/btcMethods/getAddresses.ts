import * as v from 'valibot';
import { AddressPurpose, addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { getNetworksResultSchema } from '../walletMethods';

export const getAddressesMethodName = 'getAddresses';
export const getAddressesParamsSchema = v.object({
  /**
   * The purposes for which to generate addresses. See
   * {@linkcode AddressPurpose} for available purposes.
   */
  purposes: v.array(v.enum(AddressPurpose)),
  /**
   * A message to be displayed to the user in the request prompt.
   */
  message: v.optional(v.string()),
});
export type GetAddressesParams = v.InferOutput<typeof getAddressesParamsSchema>;
export const getAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  networks: getNetworksResultSchema,
});
export type GetAddressesResult = v.InferOutput<typeof getAddressesResultSchema>;
export const getAddressesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getAddressesMethodName),
    params: getAddressesParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetAddressesRequestMessage = v.InferOutput<typeof getAddressesRequestMessageSchema>;
export type GetAddresses = MethodParamsAndResult<
  v.InferOutput<typeof getAddressesParamsSchema>,
  v.InferOutput<typeof getAddressesResultSchema>
>;
