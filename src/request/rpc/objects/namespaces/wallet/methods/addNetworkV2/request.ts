import { createRequestSchema } from 'src/request/createRequestSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  bitcoinNetworkConfigurationSchema,
  sparkNetworkConfigurationSchema,
  stacksNetworkConfigurationSchema,
  starknetNetworkConfigurationSchema,
} from '../../shared/networks';

// Network configuration schemas (omitting 'id' field)
const bitcoinNetworkConfigurationOptionsSchema = v.omit(bitcoinNetworkConfigurationSchema, ['id']);
const sparkNetworkConfigurationOptionsSchema = v.omit(sparkNetworkConfigurationSchema, ['id']);
const stacksNetworkConfigurationOptionsSchema = v.omit(stacksNetworkConfigurationSchema, ['id']);
const starknetNetworkConfigurationOptionsSchema = v.omit(starknetNetworkConfigurationSchema, [
  'id',
]);

const networkConfigurationOptionsSchema = v.variant('chain', [
  bitcoinNetworkConfigurationOptionsSchema,
  sparkNetworkConfigurationOptionsSchema,
  stacksNetworkConfigurationOptionsSchema,
  starknetNetworkConfigurationOptionsSchema,
]);

export const walletAddNetworkV2ParamsSchema = v.object({
  network: networkConfigurationOptionsSchema,
  isActive: v.optional(v.boolean()),
});

export type WalletAddNetworkV2Params = v.InferOutput<typeof walletAddNetworkV2ParamsSchema>;

export const walletAddNetworkV2RequestSchema = createRequestSchema({
  paramsSchema: walletAddNetworkV2ParamsSchema,
  method: walletMethods.wallet_addNetworkV2,
});

export type WalletAddNetworkV2Request = v.InferOutput<typeof walletAddNetworkV2RequestSchema>;
