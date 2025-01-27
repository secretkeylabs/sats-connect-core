import * as v from 'valibot';

export const walletTypes = ['software', 'ledger', 'keystone'] as const;
export const walletTypeSchema = v.picklist(walletTypes);
export type WalletType = v.InferOutput<typeof walletTypeSchema>;

// NOTE: This next value is copied from xverse-core to avoid having it as a
// dependency. It has side effects and doesn't support tree-shaking, and would
// make sats-connect-core too heavy.
const networkType = ['Mainnet', 'Testnet', 'Testnet4', 'Signet', 'Regtest'] as const;

export const networkInfoSchema = v.object({
  bitcoin: v.object({
    name: v.picklist(networkType),
  }),
  stacks: v.object({
    name: v.string(),
  }),
});
