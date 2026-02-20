import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import type * as v from 'valibot';

export const walletOpenReceiveResultSchema = addressSchema;

export type WalletOpenReceiveResult = v.InferOutput<typeof walletOpenReceiveResultSchema>;

export const walletOpenReceiveSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletOpenReceiveResultSchema,
  method: walletMethods.wallet_openReceive,
});

export type WalletOpenReceiveSuccessResponse = v.InferOutput<
  typeof walletOpenReceiveSuccessResponseSchema
>;
