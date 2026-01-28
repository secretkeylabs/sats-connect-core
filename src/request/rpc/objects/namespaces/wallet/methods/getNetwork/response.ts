import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletGetNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.picklist(['Mainnet', 'Testnet', 'Signet']),
  }),
  stacks: v.object({
    name: v.picklist(['Mainnet', 'Testnet']),
  }),
  spark: v.object({
    name: v.picklist(['Mainnet', 'Testnet']),
  }),
});

export type WalletGetNetworkResult = v.InferOutput<typeof walletGetNetworkResultSchema>;

export const walletGetNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetNetworkResultSchema,
  method: walletMethods.wallet_getNetwork,
});

export type WalletGetNetworkSuccessResponse = v.InferOutput<
  typeof walletGetNetworkSuccessResponseSchema
>;
