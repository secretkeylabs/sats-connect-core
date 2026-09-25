import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import type { WalletType } from 'src/request/rpc/objects/shared';
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
  multisig: v.object({
    hashMode: v.literal('P2SHNonSequential'),
    threshold: v.pipe(v.number(), v.integer(), v.minValue(1)),
    /**
     * Compressed secp256k1 public keys of the vault members, in the order the vault
     * address derives from.
     */
    publicKeys: v.pipe(v.array(v.pipe(v.string(), v.regex(/^0[23][0-9a-f]{64}$/))), v.minLength(1)),
  }),
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
