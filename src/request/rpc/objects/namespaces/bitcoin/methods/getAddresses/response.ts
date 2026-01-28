import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import { addressSchema } from 'src/addresses';

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

export const bitcoinGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The addresses generated for the given purposes.
     */
    addresses: v.array(addressSchema),
    network: getNetworkResultSchema,
  }),
  method: bitcoinMethods.getAddresses,
});

export type BitcoinGetAddressesSuccessResponse = v.InferOutput<
  typeof bitcoinGetAddressesSuccessResponseSchema
>;
