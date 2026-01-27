import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';

export const walletOpenReceiveSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: addressSchema,
  method: walletMethods.wallet_openReceive,
});

export type WalletOpenReceiveSuccessResponse = v.InferOutput<
  typeof walletOpenReceiveSuccessResponseSchema
>;
