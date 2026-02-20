import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletSwitchNetworkParamsSchema = v.variant('selector', [
  v.object({
    selector: v.literal('id'),
    /**
     * ID of the network configuration to activate.
     */
    id: v.string(),
  }),
]);

export type WalletSwitchNetworkParams = v.InferOutput<typeof walletSwitchNetworkParamsSchema>;

export const walletSwitchNetworkRequestSchema = createRequestSchema({
  paramsSchema: walletSwitchNetworkParamsSchema,
  method: walletMethods.wallet_switchNetwork,
});

export type WalletSwitchNetworkRequest = v.InferOutput<typeof walletSwitchNetworkRequestSchema>;
