import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import { walletTypeSchema } from '../../../bitcoin/shared';
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
