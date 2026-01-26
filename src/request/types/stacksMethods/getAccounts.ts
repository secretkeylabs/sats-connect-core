import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';
import { getNetworkResultSchema } from '../walletMethods';

export const stacksGetAccountsMethodName = 'stx_getAccounts';
export const stacksGetAccountsParamsSchema = v.nullish(v.null());
export type StacksGetAccountsParams = v.InferOutput<typeof stacksGetAccountsParamsSchema>;
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
  network: getNetworkResultSchema,
});
export type StacksGetAccountsResult = v.InferOutput<typeof stacksGetAccountsResultSchema>;
export const stacksGetAccountsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksGetAccountsMethodName),
    params: stacksGetAccountsParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksGetAccountsRequestMessage = v.InferOutput<
  typeof stacksGetAccountsRequestMessageSchema
>;
export type StacksGetAccounts = MethodParamsAndResult<
  StacksGetAccountsParams,
  StacksGetAccountsResult
>;
