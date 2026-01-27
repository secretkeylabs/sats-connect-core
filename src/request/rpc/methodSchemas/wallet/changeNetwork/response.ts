import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletChangeNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_changeNetwork,
});

export type WalletChangeNetworkSuccessResponse = v.InferOutput<
  typeof walletChangeNetworkSuccessResponseSchema
>;
