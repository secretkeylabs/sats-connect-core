import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { stacksMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';

export const stacksGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
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
  }),
  method: stacksMethods.stacks_getAddressesV2,
});

export type StacksGetAddressesV2SuccessResponse = v.InferOutput<
  typeof stacksGetAddressesV2SuccessResponseSchema
>;
