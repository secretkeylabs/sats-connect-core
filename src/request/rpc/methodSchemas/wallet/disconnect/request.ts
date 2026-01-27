import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';

export const walletDisconnectRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: walletMethods.wallet_disconnect,
});

export type WalletDisconnectRequest = v.InferOutput<typeof walletDisconnectRequestSchema>;
