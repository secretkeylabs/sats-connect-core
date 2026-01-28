import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletAddNetworkResultSchema = v.object({
  id: v.string(),
});

export type WalletAddNetworkResult = v.InferOutput<typeof walletAddNetworkResultSchema>;

export const walletAddNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletAddNetworkResultSchema,
  method: walletMethods.wallet_addNetwork,
});

export type WalletAddNetworkSuccessResponse = v.InferOutput<
  typeof walletAddNetworkSuccessResponseSchema
>;
