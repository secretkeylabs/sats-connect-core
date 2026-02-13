import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletSwitchNetworkResultSchema = v.nullish(v.null());

export type WalletSwitchNetworkResult = v.InferOutput<typeof walletSwitchNetworkResultSchema>;

export const walletSwitchNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletSwitchNetworkResultSchema,
  method: walletMethods.wallet_switchNetwork,
});

export type WalletSwitchNetworkSuccessResponse = v.InferOutput<
  typeof walletSwitchNetworkSuccessResponseSchema
>;
