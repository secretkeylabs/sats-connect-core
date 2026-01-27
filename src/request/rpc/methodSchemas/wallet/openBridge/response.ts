import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletOpenBridgeSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_openBridge,
});

export type WalletOpenBridgeSuccessResponse = v.InferOutput<
  typeof walletOpenBridgeSuccessResponseSchema
>;
