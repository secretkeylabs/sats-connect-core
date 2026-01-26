import * as v from 'valibot';
import { AddressPurpose, addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { getNetworksResultSchema } from '../walletMethods';
import { getNetworkResultSchema } from '../walletMethods';

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
  network: getNetworkResultSchema,
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

// ---- V2 ----

export const bitcoinGetAddressesV2MethodName = 'bitcoin_getAddressesV2';
export const bitcoinGetAddressesV2ParamsSchema = v.object({
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
export type BitcoinGetAddressesV2Params = v.InferOutput<typeof bitcoinGetAddressesV2ParamsSchema>;
export const bitcoinGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  networks: getNetworksResultSchema,
});
export type BitcoinGetAddressesV2Result = v.InferOutput<typeof bitcoinGetAddressesResultSchema>;
export const bitcoinGetAddressesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinGetAddressesV2MethodName),
    params: bitcoinGetAddressesV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type BitcoinGetAddressesV2RequestMessage = v.InferOutput<
  typeof bitcoinGetAddressesRequestMessageSchema
>;
export type BitcoinGetAddressesV2 = MethodParamsAndResult<
  v.InferOutput<typeof bitcoinGetAddressesV2ParamsSchema>,
  v.InferOutput<typeof bitcoinGetAddressesResultSchema>
>;
