import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletChangeNetworkRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    name: v.picklist(['Mainnet', 'Testnet', 'Signet']),
  }),
  method: walletMethods.wallet_changeNetwork,
});

export type WalletChangeNetworkRequest = v.InferOutput<typeof walletChangeNetworkRequestSchema>;
