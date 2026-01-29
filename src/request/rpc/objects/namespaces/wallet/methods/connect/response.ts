import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { walletTypeSchema } from 'src/request/rpc/objects/shared';
import * as v from 'valibot';
import { walletGetNetworkResultSchema } from '../getNetwork';

export const walletConnectResultSchema = v.object({
  id: v.string(),
  addresses: v.array(addressSchema),
  walletType: walletTypeSchema,
  network: walletGetNetworkResultSchema,
});

export type WalletConnectResult = v.InferOutput<typeof walletConnectResultSchema>;

export const walletConnectSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletConnectResultSchema,
  method: walletMethods.wallet_connect,
});

export type WalletConnectSuccessResponse = v.InferOutput<typeof walletConnectSuccessResponseSchema>;
