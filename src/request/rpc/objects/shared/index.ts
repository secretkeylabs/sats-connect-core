import * as v from 'valibot';

export const walletTypes = ['software', 'ledger', 'keystone', 'multisig'] as const;
export const walletTypeSchema = v.picklist(walletTypes);
export type WalletType = v.InferOutput<typeof walletTypeSchema>;

/**
 * Signer set of a Stacks multisig (vault) address.
 */
export const stacksMultisigSchema = v.object({
  hashMode: v.literal('P2SHNonSequential'),
  threshold: v.pipe(v.number(), v.integer(), v.minValue(1)),
  /**
   * Compressed secp256k1 public keys of the vault members, in the order the vault
   * address derives from.
   */
  publicKeys: v.pipe(v.array(v.pipe(v.string(), v.regex(/^0[23][0-9a-f]{64}$/))), v.minLength(1)),
});

export type StacksMultisig = v.InferOutput<typeof stacksMultisigSchema>;
