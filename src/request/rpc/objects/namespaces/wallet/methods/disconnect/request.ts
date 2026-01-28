import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletDisconnectRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_disconnect,
});

export type WalletDisconnectRequest = v.InferOutput<typeof walletDisconnectRequestSchema>;
