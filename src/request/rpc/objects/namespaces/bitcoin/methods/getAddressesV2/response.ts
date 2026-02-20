import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { allResolvedNetworksSchema } from '../../../wallet';

export const bitcoinGetAddressesV2ResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  networks: allResolvedNetworksSchema,
});

export type BitcoinGetAddressesV2Result = v.InferOutput<typeof bitcoinGetAddressesV2ResultSchema>;

export const bitcoinGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetAddressesV2ResultSchema,
  method: bitcoinMethods.bitcoin_getAddressesV2,
});

export type BitcoinGetAddressesV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetAddressesV2SuccessResponseSchema
>;
