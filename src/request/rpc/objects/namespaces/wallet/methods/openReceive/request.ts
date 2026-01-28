import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';

export const walletOpenReceiveRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    address: v.string(),
  }),
  method: walletMethods.wallet_openReceive,
});

export type WalletOpenReceiveRequest = v.InferOutput<typeof walletOpenReceiveRequestSchema>;
