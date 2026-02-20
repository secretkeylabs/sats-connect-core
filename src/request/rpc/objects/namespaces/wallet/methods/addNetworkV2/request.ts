import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import { networkConfigurationOptionsSchema } from '../../shared';

export const walletAddNetworkV2ParamsSchema = v.object({
  network: networkConfigurationOptionsSchema,

  /**
   * Whether to switch to the newly added network after adding it. Defaults to
   * false.
   */
  switch: v.optional(v.boolean(), false),
});

export type WalletAddNetworkV2Params = v.InferOutput<typeof walletAddNetworkV2ParamsSchema>;

export const walletAddNetworkV2RequestSchema = createRequestSchema({
  paramsSchema: walletAddNetworkV2ParamsSchema,
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2Request = v.InferOutput<typeof walletAddNetworkV2RequestSchema>;
