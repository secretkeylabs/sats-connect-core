import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletOpenBridgeRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    fromAsset: v.string(),
    toAsset: v.string(),
  }),
  method: walletMethods.wallet_openBridge,
});

export type WalletOpenBridgeRequest = v.InferOutput<typeof walletOpenBridgeRequestSchema>;
