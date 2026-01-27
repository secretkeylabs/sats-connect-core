import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';

export const walletRequestPermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.literal(true),
  method: walletMethods.wallet_requestPermissions,
});

export type WalletRequestPermissionsSuccessResponse = v.InferOutput<
  typeof walletRequestPermissionsSuccessResponseSchema
>;
