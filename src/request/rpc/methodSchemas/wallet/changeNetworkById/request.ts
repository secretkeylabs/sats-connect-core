import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletChangeNetworkByIdRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    id: v.string(),
  }),
  method: walletMethods.wallet_changeNetworkById,
});

export type WalletChangeNetworkByIdRequest = v.InferOutput<
  typeof walletChangeNetworkByIdRequestSchema
>;
