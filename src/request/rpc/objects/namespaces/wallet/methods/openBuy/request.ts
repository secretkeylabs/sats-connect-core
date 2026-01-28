import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenBuyParamsSchema = v.object({
  asset: v.string(),
});

export type WalletOpenBuyParams = v.InferOutput<typeof walletOpenBuyParamsSchema>;

export const walletOpenBuyRequestSchema = createRequestSchema({
  paramsSchema: walletOpenBuyParamsSchema,
  method: walletMethods.wallet_openBuy,
});

export type WalletOpenBuyRequest = v.InferOutput<typeof walletOpenBuyRequestSchema>;
