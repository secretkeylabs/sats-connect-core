import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletOpenReceiveParamsSchema = v.object({
  address: v.string(),
});

export type WalletOpenReceiveParams = v.InferOutput<typeof walletOpenReceiveParamsSchema>;

export const walletOpenReceiveRequestSchema = createRequestSchema({
  paramsSchema: walletOpenReceiveParamsSchema,
  method: walletMethods.wallet_openReceive,
});

export type WalletOpenReceiveRequest = v.InferOutput<typeof walletOpenReceiveRequestSchema>;
