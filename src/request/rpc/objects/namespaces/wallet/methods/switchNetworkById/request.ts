import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletSwitchNetworkByIdParamsSchema = v.object({
  /**
   * ID of the network configuration to activate.
   */
  id: v.string(),
});

export type WalletSwitchNetworkByIdParams = v.InferOutput<
  typeof walletSwitchNetworkByIdParamsSchema
>;

export const walletSwitchNetworkByIdRequestSchema = createRequestSchema({
  paramsSchema: walletSwitchNetworkByIdParamsSchema,
  method: walletMethods.wallet_switchNetworkById,
});

export type WalletSwitchNetworkByIdRequest = v.InferOutput<
  typeof walletSwitchNetworkByIdRequestSchema
>;
