import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';
import { walletGetNetworkResultSchema } from '../../../wallet';

export const stacksGetAccountsResultSchema = v.object({
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
  network: walletGetNetworkResultSchema,
});

export type StacksGetAccountsResult = v.InferOutput<typeof stacksGetAccountsResultSchema>;

export const stacksGetAccountsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksGetAccountsResultSchema,
  method: stacksMethods.stx_getAccounts,
});

export type StacksGetAccountsSuccessResponse = v.InferOutput<
  typeof stacksGetAccountsSuccessResponseSchema
>;
