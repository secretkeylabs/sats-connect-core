import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetAddressesV2ResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: v.object({
    type: v.union([
      v.literal('Mainnet'),
      v.literal('Testnet'),
      v.literal('Devnet'),
      v.literal('Signet'),
    ]),
    chain: v.union([v.literal('bitcoin'), v.literal('stacks')]),
  }),
});

export type StacksGetAddressesV2Result = v.InferOutput<typeof stacksGetAddressesV2ResultSchema>;

export const stacksGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksGetAddressesV2ResultSchema,
  method: stacksMethods.stacks_getAddressesV2,
});

export type StacksGetAddressesV2SuccessResponse = v.InferOutput<
  typeof stacksGetAddressesV2SuccessResponseSchema
>;
