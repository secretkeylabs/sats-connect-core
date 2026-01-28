import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';

export const walletDisconnectSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_disconnect,
});

export type WalletDisconnectSuccessResponse = v.InferOutput<
  typeof walletDisconnectSuccessResponseSchema
>;
