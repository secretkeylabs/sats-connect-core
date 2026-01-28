import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

const getNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.string(),
  }),
  stacks: v.object({
    name: v.string(),
  }),
  spark: v.object({
    name: v.string(),
  }),
});

export const bitcoinGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: getNetworkResultSchema,
});

export type BitcoinGetAddressesResult = v.InferOutput<typeof bitcoinGetAddressesResultSchema>;

export const bitcoinGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetAddressesResultSchema,
  method: bitcoinMethods.getAddresses,
});

export type BitcoinGetAddressesSuccessResponse = v.InferOutput<
  typeof bitcoinGetAddressesSuccessResponseSchema
>;
