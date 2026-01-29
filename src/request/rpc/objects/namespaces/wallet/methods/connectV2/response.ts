import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import { walletTypeSchema } from '../../../bitcoin';
import { walletGetNetworksResultSchema } from '../getNetworks';

export const walletConnectV2ResultSchema = v.object({
  accountId: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  networks: walletGetNetworksResultSchema,
});

export type WalletConnectV2Result = v.InferOutput<typeof walletConnectV2ResultSchema>;

export const walletConnectV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletConnectV2ResultSchema,
  method: walletMethods.wallet_connectV2,
});

export type WalletConnectV2SuccessResponse = v.InferOutput<
  typeof walletConnectV2SuccessResponseSchema
>;
