import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

const getNetworksResultSchema = v.object({
  active: v.object({
    bitcoin: v.object({
      id: v.string(),
      type: v.string(),
      name: v.string(),
    }),
    stacks: v.object({
      id: v.string(),
      type: v.string(),
      name: v.string(),
    }),
    spark: v.object({
      id: v.string(),
      type: v.string(),
      name: v.string(),
    }),
    starknet: v.object({
      id: v.string(),
      type: v.string(),
      name: v.string(),
    }),
  }),
  builtin: v.object({
    bitcoin: v.array(v.any()),
    stacks: v.array(v.any()),
    spark: v.array(v.any()),
    starknet: v.array(v.any()),
  }),
  custom: v.object({
    bitcoin: v.array(v.any()),
    stacks: v.array(v.any()),
    spark: v.array(v.any()),
    starknet: v.array(v.any()),
  }),
});

export const bitcoinGetAddressesV2ResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  networks: getNetworksResultSchema,
});

export type BitcoinGetAddressesV2Result = v.InferOutput<typeof bitcoinGetAddressesV2ResultSchema>;

export const bitcoinGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetAddressesV2ResultSchema,
  method: bitcoinMethods.bitcoin_getAddressesV2,
});

export type BitcoinGetAddressesV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetAddressesV2SuccessResponseSchema
>;
