import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletChangeNetworkByIdRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    id: v.string(),
  }),
  method: walletMethods.wallet_changeNetworkById,
});

export type WalletChangeNetworkByIdRequest = v.InferOutput<
  typeof walletChangeNetworkByIdRequestSchema
>;
