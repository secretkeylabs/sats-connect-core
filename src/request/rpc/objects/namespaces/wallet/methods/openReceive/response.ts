import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { addressSchema } from 'src/addresses';

export const walletOpenReceiveSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: addressSchema,
  method: walletMethods.wallet_openReceive,
});

export type WalletOpenReceiveSuccessResponse = v.InferOutput<
  typeof walletOpenReceiveSuccessResponseSchema
>;
