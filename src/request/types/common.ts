import * as v from 'valibot';

export const walletTypes = ['software', 'ledger'] as const;
export const walletTypeSchema = v.picklist(walletTypes);
export type WalletType = v.InferOutput<typeof walletTypeSchema>;