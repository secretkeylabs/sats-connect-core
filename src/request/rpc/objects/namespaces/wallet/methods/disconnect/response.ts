import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletDisconnectResultSchema = v.nullish(v.null());

export type WalletDisconnectResult = v.InferOutput<typeof walletDisconnectResultSchema>;

export const walletDisconnectSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletDisconnectResultSchema,
  method: walletMethods.wallet_disconnect,
});

export type WalletDisconnectSuccessResponse = v.InferOutput<
  typeof walletDisconnectSuccessResponseSchema
>;
