import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksGetAccountsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The addresses generated for the given purposes.
     */
    addresses: v.array(
      v.object({
        address: v.string(),
        publicKey: v.string(),
        gaiaHubUrl: v.string(),
        gaiaAppKey: v.string(),
      })
    ),
    network: v.object({
      type: v.string(),
      address: v.string(),
    }),
  }),
  method: stacksMethods.stx_getAccounts,
});

export type StacksGetAccountsSuccessResponse = v.InferOutput<
  typeof stacksGetAccountsSuccessResponseSchema
>;
