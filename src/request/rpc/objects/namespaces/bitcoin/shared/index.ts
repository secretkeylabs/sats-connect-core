import * as v from 'valibot';

export const walletTypes = ['software', 'ledger', 'keystone'] as const;
export const walletTypeSchema = v.picklist(walletTypes);
export type WalletType = v.InferOutput<typeof walletTypeSchema>;

export enum MessageSigningProtocols {
  ECDSA = 'ECDSA',
  BIP322 = 'BIP322',
}

export enum ProviderPlatform {
  Web = 'web',
  Mobile = 'mobile',
}
