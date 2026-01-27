import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletDisconnectSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.nullish(v.null()),
  method: walletMethods.wallet_disconnect,
});

export type WalletDisconnectSuccessResponse = v.InferOutput<
  typeof walletDisconnectSuccessResponseSchema
>;
