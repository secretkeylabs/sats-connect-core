import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletAddNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
  }),
  method: walletMethods.wallet_addNetwork,
});

export type WalletAddNetworkSuccessResponse = v.InferOutput<
  typeof walletAddNetworkSuccessResponseSchema
>;
