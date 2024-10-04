import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxGetAccountsMethodName = 'stx_getAccounts';
export const stxGetAccountsParamsSchema = v.nullish(v.null());
export type StxGetAccountsParams = v.InferOutput<typeof stxGetAccountsParamsSchema>;
export const stxGetAccountsResultSchema = v.object({
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
});
export type StxGetAccountsResult = v.InferOutput<typeof stxGetAccountsResultSchema>;
export const stxGetAccountsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxGetAccountsMethodName),
    params: stxGetAccountsParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxGetAccountsRequestMessage = v.InferOutput<typeof stxGetAccountsRequestMessageSchema>;
export type StxGetAccounts = MethodParamsAndResult<StxGetAccountsParams, StxGetAccountsResult>;
