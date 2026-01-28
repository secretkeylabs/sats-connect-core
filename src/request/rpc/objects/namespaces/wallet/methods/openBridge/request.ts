import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenBridgeParamsSchema = v.object({
  fromAsset: v.string(),
  toAsset: v.string(),
});

export type WalletOpenBridgeParams = v.InferOutput<typeof walletOpenBridgeParamsSchema>;

export const walletOpenBridgeRequestSchema = createRequestSchema({
  paramsSchema: walletOpenBridgeParamsSchema,
  method: walletMethods.wallet_openBridge,
});

export type WalletOpenBridgeRequest = v.InferOutput<typeof walletOpenBridgeRequestSchema>;
