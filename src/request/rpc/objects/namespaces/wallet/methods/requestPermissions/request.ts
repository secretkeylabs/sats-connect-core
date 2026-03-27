import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import { permissionRequestParamsSchema } from '../../shared/permissions';

/**
 * This method waas previously used to connect to the wallet similarly to how
 * `wallet_connect` is used now: when no permissions are explicitly requested,
 * account read permissions are implied. The `nullish` schema allows maintaining
 * backwards compatibility with this behavior while still allowing for explicit
 * permission requests.
 */
export const walletRequestPermissionsParamsSchema = v.nullish(
  v.array(permissionRequestParamsSchema)
);

export type WalletRequestPermissionsParams = v.InferOutput<
  typeof walletRequestPermissionsParamsSchema
>;

export const walletRequestPermissionsRequestSchema = createRequestSchema({
  paramsSchema: walletRequestPermissionsParamsSchema,
  method: walletMethods.wallet_requestPermissions,
});

export type WalletRequestPermissionsRequest = v.InferOutput<
  typeof walletRequestPermissionsRequestSchema
>;
