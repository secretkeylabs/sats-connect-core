import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletDisconnectParamsSchema = v.nullish(v.null());

export type WalletDisconnectParams = v.InferOutput<typeof walletDisconnectParamsSchema>;

export const walletDisconnectRequestSchema = createRequestSchema({
  paramsSchema: walletDisconnectParamsSchema,
  method: walletMethods.wallet_disconnect,
});

export type WalletDisconnectRequest = v.InferOutput<typeof walletDisconnectRequestSchema>;
