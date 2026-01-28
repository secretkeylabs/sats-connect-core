import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletOpenBridgeSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_openBridge,
});

export type WalletOpenBridgeSuccessResponse = v.InferOutput<
  typeof walletOpenBridgeSuccessResponseSchema
>;
