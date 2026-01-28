import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletChangeNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_changeNetwork,
});

export type WalletChangeNetworkSuccessResponse = v.InferOutput<
  typeof walletChangeNetworkSuccessResponseSchema
>;
