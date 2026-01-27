import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';

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

export const bitcoinGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The addresses generated for the given purposes.
     */
    addresses: v.array(addressSchema),
    networks: getNetworksResultSchema,
  }),
  method: bitcoinMethods.bitcoin_getAddressesV2,
});

export type BitcoinGetAddressesV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetAddressesV2SuccessResponseSchema
>;
