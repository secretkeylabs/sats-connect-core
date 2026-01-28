import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletAddNetworkV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
  }),
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2SuccessResponse = v.InferOutput<
  typeof walletAddNetworkV2SuccessResponseSchema
>;
