import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import { permissionRequestParamsSchema } from '../../shared/permissions';

export const walletRequestPermissionsParamsSchema = v.array(permissionRequestParamsSchema);

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
