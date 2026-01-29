import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { walletTypeSchema } from 'src/request/rpc/objects/shared';
import * as v from 'valibot';
import { walletGetNetworksResultSchema } from '../getNetworks';

export const walletGetAccountV2ResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  networks: walletGetNetworksResultSchema,
});

export type WalletGetAccountV2Result = v.InferOutput<typeof walletGetAccountV2ResultSchema>;

export const walletGetAccountV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetAccountV2ResultSchema,
  method: walletMethods.wallet_getAccountV2,
});

export type WalletGetAccountV2SuccessResponse = v.InferOutput<
  typeof walletGetAccountV2SuccessResponseSchema
>;
