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

// ---- V2 ----

export const bitcoinGetAccountsV2MethodName = 'bitcoin_getAccountsV2';
export const bitcoinGetAccountsV2ParamsSchema = v.object({
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
export type BitcoinGetAccountsV2Params = v.InferOutput<typeof bitcoinGetAccountsV2ParamsSchema>;

export const bitcoinGetAccountsV2ResultSchema = v.array(
  v.object({
    ...addressSchema.entries,
    ...v.object({
      walletType: walletTypeSchema,
    }).entries,
  })
);
export type BitcoinGetAccountsV2Result = v.InferOutput<typeof bitcoinGetAccountsV2ResultSchema>;
export const bitcoinGetAccountsV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinGetAccountsV2MethodName),
    params: bitcoinGetAccountsV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type BitcoinGetAccountsV2RequestMessage = v.InferOutput<
  typeof bitcoinGetAccountsV2RequestMessageSchema
>;
export type BitcoinGetAccountsV2 = MethodParamsAndResult<
  v.InferOutput<typeof bitcoinGetAccountsV2ParamsSchema>,
  v.InferOutput<typeof bitcoinGetAccountsV2ResultSchema>
>;
