import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import { stacksMultisigSchema, type WalletType } from 'src/request/rpc/objects/shared';
import * as v from 'valibot';
import { walletGetNetworkResultSchema } from '../../../wallet';

export const stacksLegacyAccountSchema = v.object({
  address: v.string(),
  publicKey: v.string(),
  gaiaHubUrl: v.string(),
  gaiaAppKey: v.string(),
  walletType: v.optional(
    v.picklist(['software', 'ledger', 'keystone'] satisfies readonly WalletType[])
  ),
});

export type StacksLegacyAccount = v.InferOutput<typeof stacksLegacyAccountSchema>;

export const stacksMultisigAccountSchema = v.strictObject({
  address: v.string(),
  walletType: v.literal('multisig' satisfies WalletType),
  multisig: stacksMultisigSchema,
});

export type StacksMultisigAccount = v.InferOutput<typeof stacksMultisigAccountSchema>;

export const stacksAccountSchema = v.union([
  stacksLegacyAccountSchema,
  stacksMultisigAccountSchema,
]);

export type StacksAccount = v.InferOutput<typeof stacksAccountSchema>;

export const stacksGetAccountsResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(stacksAccountSchema),
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
