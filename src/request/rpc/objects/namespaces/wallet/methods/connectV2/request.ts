import { AddressPurpose } from 'src/addresses';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const walletConnectV2ParamsSchema = v.nullish(
  v.object({
    permissions: v.optional(v.array(permissionRequestParamsSchema)),
    addresses: v.optional(v.array(v.enum(AddressPurpose))),
    message: v.optional(
      v.pipe(v.string(), v.maxLength(80, 'The message must not exceed 80 characters.'))
    ),
    networkId: v.optional(v.string()),
  })
);

export type WalletConnectV2Params = v.InferOutput<typeof walletConnectV2ParamsSchema>;

export const walletConnectV2RequestSchema = createRequestSchema({
  paramsSchema: walletConnectV2ParamsSchema,
  method: walletMethods.wallet_connectV2,
});

export type WalletConnectV2Request = v.InferOutput<typeof walletConnectV2RequestSchema>;
