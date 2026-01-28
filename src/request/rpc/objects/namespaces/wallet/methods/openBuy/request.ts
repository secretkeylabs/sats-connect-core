import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletOpenBuyRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    asset: v.string(),
  }),
  method: walletMethods.wallet_openBuy,
});

export type WalletOpenBuyRequest = v.InferOutput<typeof walletOpenBuyRequestSchema>;
