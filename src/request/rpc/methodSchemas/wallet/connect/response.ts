import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { walletMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';

const walletTypeSchema = v.picklist(['software', 'ledger']);

const getNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.picklist(['Mainnet', 'Testnet', 'Signet']),
  }),
  stacks: v.object({
    name: v.picklist(['Mainnet', 'Testnet']),
  }),
  spark: v.object({
    name: v.picklist(['Mainnet', 'Testnet']),
  }),
});

export const walletConnectSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    id: v.string(),
    addresses: v.array(addressSchema),
    walletType: walletTypeSchema,
    network: getNetworkResultSchema,
  }),
  method: walletMethods.wallet_connect,
});

export type WalletConnectSuccessResponse = v.InferOutput<typeof walletConnectSuccessResponseSchema>;
