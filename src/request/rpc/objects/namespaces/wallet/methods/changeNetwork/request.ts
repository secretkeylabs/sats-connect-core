import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletChangeNetworkParamsSchema = v.object({
  name: v.picklist(['Mainnet', 'Testnet', 'Signet']),
});

export type WalletChangeNetworkParams = v.InferOutput<typeof walletChangeNetworkParamsSchema>;

export const walletChangeNetworkRequestSchema = createRequestSchema({
  paramsSchema: walletChangeNetworkParamsSchema,
  method: walletMethods.wallet_changeNetwork,
});

export type WalletChangeNetworkRequest = v.InferOutput<typeof walletChangeNetworkRequestSchema>;
