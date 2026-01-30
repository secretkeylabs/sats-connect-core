import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { allResolvedNetworksSchema } from '../../shared';

export const walletGetNetworksResultSchema = allResolvedNetworksSchema;

export type WalletGetNetworksResult = v.InferOutput<typeof walletGetNetworksResultSchema>;

export const walletGetNetworksSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetNetworksResultSchema,
  method: walletMethods.wallet_getNetworks,
});

export type WalletGetNetworksSuccessResponse = v.InferOutput<
  typeof walletGetNetworksSuccessResponseSchema
>;
