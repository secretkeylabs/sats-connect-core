import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { walletMethods } from '../../../../methods';
import { AddressPurpose } from '../../../../../addresses';

// Permission request schemas
const accountActionsSchema = v.object({
  read: v.optional(v.boolean()),
});

const walletActionsSchema = v.object({
  readNetwork: v.optional(v.boolean()),
});

const accountPermissionRequestSchema = v.object({
  type: v.literal('account'),
  resourceId: v.string(),
  actions: accountActionsSchema,
});

const walletPermissionRequestSchema = v.object({
  type: v.literal('wallet'),
  resourceId: v.string(),
  actions: walletActionsSchema,
});

const permissionRequestParamsSchema = v.variant('type', [
  accountPermissionRequestSchema,
  walletPermissionRequestSchema,
]);

export const walletConnectRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(
    v.object({
      permissions: v.optional(v.array(permissionRequestParamsSchema)),
      addresses: v.optional(v.array(v.enum(AddressPurpose))),
      message: v.optional(
        v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
      ),
      network: v.optional(v.picklist(['Mainnet', 'Testnet', 'Signet'])),
    })
  ),
  method: walletMethods.wallet_connect,
});

export type WalletConnectRequest = v.InferOutput<typeof walletConnectRequestSchema>;
