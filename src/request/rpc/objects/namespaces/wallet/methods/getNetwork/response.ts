import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { walletMethods } from 'src/request/methods';
import { BitcoinNetworkType, SparkNetworkType, StacksNetworkType } from 'src/types';
import * as v from 'valibot';

export const walletGetNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.enum(BitcoinNetworkType),
  }),
  stacks: v.object({
    name: v.enum(StacksNetworkType),
  }),
  spark: v.object({
    name: v.enum(SparkNetworkType),
  }),
});

export type WalletGetNetworkResult = v.InferOutput<typeof walletGetNetworkResultSchema>;

export const walletGetNetworkSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: walletGetNetworkResultSchema,
  method: walletMethods.wallet_getNetwork,
});

export type WalletGetNetworkSuccessResponse = v.InferOutput<
  typeof walletGetNetworkSuccessResponseSchema
>;
