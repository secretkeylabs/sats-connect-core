import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletChangeNetworkRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    name: v.picklist(['Mainnet', 'Testnet', 'Signet']),
  }),
  method: walletMethods.wallet_changeNetwork,
});

export type WalletChangeNetworkRequest = v.InferOutput<typeof walletChangeNetworkRequestSchema>;
