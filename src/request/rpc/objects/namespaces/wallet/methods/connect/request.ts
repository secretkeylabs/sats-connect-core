import { AddressPurpose } from 'src/addresses';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import { permissionRequestParamsSchema } from '../../shared/permissions';

export const walletConnectParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(permissionRequestParamsSchema)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
    network: v.optional(v.picklist(['Mainnet', 'Testnet', 'Signet'])),
  })
);

export type WalletConnectParams = v.InferOutput<typeof walletConnectParamsSchema>;

export const walletConnectRequestSchema = createRequestSchema({
  paramsSchema: walletConnectParamsSchema,
  method: walletMethods.wallet_connect,
});

export type WalletConnectRequest = v.InferOutput<typeof walletConnectRequestSchema>;
