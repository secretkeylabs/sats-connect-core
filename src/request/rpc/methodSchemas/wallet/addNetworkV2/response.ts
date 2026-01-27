import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletAddNetworkV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
  }),
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2SuccessResponse = v.InferOutput<
  typeof walletAddNetworkV2SuccessResponseSchema
>;
