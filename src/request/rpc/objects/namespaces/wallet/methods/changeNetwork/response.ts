import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletChangeNetworkResultSchema = v.nullish(v.null());

export type WalletChangeNetworkResult = v.InferOutput<typeof walletChangeNetworkResultSchema>;

export const walletChangeNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletChangeNetworkResultSchema,
  method: walletMethods.wallet_changeNetwork,
});

export type WalletChangeNetworkSuccessResponse = v.InferOutput<
  typeof walletChangeNetworkSuccessResponseSchema
>;
