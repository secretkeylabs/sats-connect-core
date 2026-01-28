import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletOpenBridgeRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    fromAsset: v.string(),
    toAsset: v.string(),
  }),
  method: walletMethods.wallet_openBridge,
});

export type WalletOpenBridgeRequest = v.InferOutput<typeof walletOpenBridgeRequestSchema>;
