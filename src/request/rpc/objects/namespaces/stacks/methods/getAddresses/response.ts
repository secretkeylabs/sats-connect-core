import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: v.object({
    type: v.string(),
    address: v.string(),
  }),
});

export type StacksGetAddressesResult = v.InferOutput<typeof stacksGetAddressesResultSchema>;

export const stacksGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksGetAddressesResultSchema,
  method: stacksMethods.stx_getAddresses,
});

export type StacksGetAddressesSuccessResponse = v.InferOutput<
  typeof stacksGetAddressesSuccessResponseSchema
>;
