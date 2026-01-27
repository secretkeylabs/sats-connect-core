import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletGetNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    bitcoin: v.object({
      name: v.picklist(['Mainnet', 'Testnet', 'Signet']),
    }),
    stacks: v.object({
      name: v.picklist(['Mainnet', 'Testnet']),
    }),
    spark: v.object({
      name: v.picklist(['Mainnet', 'Testnet']),
    }),
  }),
  method: walletMethods.wallet_getNetwork,
});

export type WalletGetNetworkSuccessResponse = v.InferOutput<
  typeof walletGetNetworkSuccessResponseSchema
>;
