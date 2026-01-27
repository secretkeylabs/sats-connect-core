import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { stacksMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';

export const stacksGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The addresses generated for the given purposes.
     */
    addresses: v.array(addressSchema),
    network: v.object({
      type: v.string(),
      address: v.string(),
    }),
  }),
  method: stacksMethods.stx_getAddresses,
});

export type StacksGetAddressesSuccessResponse = v.InferOutput<
  typeof stacksGetAddressesSuccessResponseSchema
>;
