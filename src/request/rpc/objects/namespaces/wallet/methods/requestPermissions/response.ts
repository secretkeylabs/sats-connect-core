import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

export const walletRequestPermissionsResultSchema = v.literal(true);

export type WalletRequestPermissionsResult = v.InferOutput<
  typeof walletRequestPermissionsResultSchema
>;

export const walletRequestPermissionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletRequestPermissionsResultSchema,
  method: walletMethods.wallet_requestPermissions,
});

export type WalletRequestPermissionsSuccessResponse = v.InferOutput<
  typeof walletRequestPermissionsSuccessResponseSchema
>;
