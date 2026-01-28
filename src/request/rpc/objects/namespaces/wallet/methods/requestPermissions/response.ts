import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletRequestPermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.literal(true),
  method: walletMethods.wallet_requestPermissions,
});

export type WalletRequestPermissionsSuccessResponse = v.InferOutput<
  typeof walletRequestPermissionsSuccessResponseSchema
>;
