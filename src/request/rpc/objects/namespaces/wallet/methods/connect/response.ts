import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const walletConnectResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: getNetworkResultSchema,
});

export type WalletConnectResult = v.InferOutput<typeof walletConnectResultSchema>;

export const walletConnectSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletConnectResultSchema,
  method: walletMethods.wallet_connect,
});

export type WalletConnectSuccessResponse = v.InferOutput<typeof walletConnectSuccessResponseSchema>;
