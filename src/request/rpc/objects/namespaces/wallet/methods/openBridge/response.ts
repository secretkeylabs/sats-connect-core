import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenBridgeResultSchema = v.nullish(v.null());

export type WalletOpenBridgeResult = v.InferOutput<typeof walletOpenBridgeResultSchema>;

export const walletOpenBridgeSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletOpenBridgeResultSchema,
  method: walletMethods.wallet_openBridge,
});

export type WalletOpenBridgeSuccessResponse = v.InferOutput<
  typeof walletOpenBridgeSuccessResponseSchema
>;
