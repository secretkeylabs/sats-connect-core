import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { walletTypeSchema } from 'src/request/rpc/objects/shared';
import * as v from 'valibot';
import { walletGetNetworkResultSchema } from '../getNetwork';

export const walletGetAccountResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: walletGetNetworkResultSchema,
});

export type WalletGetAccountResult = v.InferOutput<typeof walletGetAccountResultSchema>;

export const walletGetAccountSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetAccountResultSchema,
  method: walletMethods.wallet_getAccount,
});

export type WalletGetAccountSuccessResponse = v.InferOutput<
  typeof walletGetAccountSuccessResponseSchema
>;
