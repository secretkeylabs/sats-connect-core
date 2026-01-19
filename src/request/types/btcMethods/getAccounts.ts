import * as v from 'valibot';
import { AddressPurpose, addressSchema } from '../../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import { walletTypeSchema } from '../common';

export const getAccountsMethodName = 'getAccounts';
export const getAccountsParamsSchema = v.object({
  /**
   * The purposes for which to generate addresses. See
   * {@linkcode AddressPurpose} for available purposes.
   */
  purposes: v.array(v.enum(AddressPurpose)),
  /**
   * A message to be displayed to the user in the request prompt.
   */
  message: v.optional(v.string()),
});
export type GetAccountsParams = v.InferOutput<typeof getAccountsParamsSchema>;

export const getAccountsResultSchema = v.array(
  v.object({
    ...addressSchema.entries,
    ...v.object({
      walletType: walletTypeSchema,
    }).entries,
  })
);
export type GetAccountsResult = v.InferOutput<typeof getAccountsResultSchema>;
export const getAccountsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getAccountsMethodName),
    params: getAccountsParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetAccountsRequestMessage = v.InferOutput<typeof getAccountsRequestMessageSchema>;
export type GetAccounts = MethodParamsAndResult<
  v.InferOutput<typeof getAccountsParamsSchema>,
  v.InferOutput<typeof getAccountsResultSchema>
>;
