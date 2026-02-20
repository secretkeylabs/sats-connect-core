import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { networkConfigurationSchema } from '../../shared/networks';

export const walletAddNetworkV2ResultSchema = networkConfigurationSchema;

export type WalletAddNetworkV2Result = v.InferOutput<typeof walletAddNetworkV2ResultSchema>;

export const walletAddNetworkV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletAddNetworkV2ResultSchema,
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2SuccessResponse = v.InferOutput<
  typeof walletAddNetworkV2SuccessResponseSchema
>;
