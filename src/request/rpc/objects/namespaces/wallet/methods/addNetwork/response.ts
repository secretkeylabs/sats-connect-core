import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletAddNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
  }),
  method: walletMethods.wallet_addNetwork,
});

export type WalletAddNetworkSuccessResponse = v.InferOutput<
  typeof walletAddNetworkSuccessResponseSchema
>;
