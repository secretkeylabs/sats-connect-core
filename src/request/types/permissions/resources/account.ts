import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex } from '@noble/hashes/utils';
import * as v from 'valibot';
import { actionDescriptionSchema } from './common';
import { AccountId, accountIdSchema } from '../utils/account-id';
import { BitcoinNetworkType } from 'src/types';

export type AccountResourceIdArgs = {
  masterPubKey: string;
  accountId: AccountId;
  networkType: BitcoinNetworkType;
};

export const accountResourceIdBrandName = 'AccountResourceId';

const sha256HexStringRegex = /^[\da-f]{64}$/;
export const accountResourceIdSchema = v.pipe(
  v.string(),
  v.check((input) => sha256HexStringRegex.test(input)),
  v.brand('AccountResourceId')
);

export type AccountResourceId = v.InferOutput<typeof accountResourceIdSchema>;

export function makeAccountResourceId(accountId: AccountId) {
  return v.parse(accountResourceIdSchema, bytesToHex(sha256(`account-resource-${accountId}`)));
}

export const accountResourceSchema = v.object({
  type: v.literal('account'),
  id: accountResourceIdSchema,
  accountId: accountIdSchema,
  name: v.string(),
});
export type AccountResource = v.InferOutput<typeof accountResourceSchema>;

export function makeAccountResource(args: AccountResourceIdArgs): AccountResource {
  return {
    type: 'account',
    id: makeAccountResourceId(args.accountId),
    accountId: args.accountId,
    name: `Account ${args.accountId}, ${args.masterPubKey.slice(0, 6)}...(${args.networkType})`,
  };
}

export const accountActionsSchema = v.object({
  read: v.optional(v.boolean()),
  autoSign: v.optional(v.boolean()),
  rename: v.optional(v.boolean()),
});
export const accountActionsDescriptionSchema = v.record(
  v.keyof(accountActionsSchema),
  actionDescriptionSchema
);
export type AccountActionsDescription = v.InferOutput<typeof accountActionsDescriptionSchema>;
export const accountPermissionSchema = v.object({
  type: v.literal('account'),
  resourceId: accountResourceIdSchema,
  clientId: v.string(),

  actions: accountActionsSchema,
});
