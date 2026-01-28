import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletAddNetworkV2ResultSchema = v.object({
  id: v.string(),
});

export type WalletAddNetworkV2Result = v.InferOutput<typeof walletAddNetworkV2ResultSchema>;

export const walletAddNetworkV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletAddNetworkV2ResultSchema,
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2SuccessResponse = v.InferOutput<
  typeof walletAddNetworkV2SuccessResponseSchema
>;
