import { BitcoinNetworkType, MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const runesMintMethodName = 'runes_mint';

export const runesMintParamsSchema = v.object({
  appServiceFee: v.optional(v.number()),
  appServiceFeeAddress: v.optional(v.string()),
  destinationAddress: v.string(),
  feeRate: v.number(),
  refundAddress: v.string(),
  repeats: v.number(),
  runeName: v.string(),
  network: v.optional(v.enum(BitcoinNetworkType)),
});
export type RunesMintParams = v.InferOutput<typeof runesMintParamsSchema>;

export const runesMintResultSchema = v.object({
  orderId: v.string(),
  fundTransactionId: v.string(),
  fundingAddress: v.string(),
});
export type RunesMintResult = v.InferOutput<typeof runesMintResultSchema>;

export const runesMintRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(runesMintMethodName),
    params: runesMintParamsSchema,
    id: v.string(),
  }).entries,
});
export type RunesMintRequestMessage = v.InferOutput<typeof runesMintRequestMessageSchema>;

export type RunesMint = MethodParamsAndResult<
  v.InferOutput<typeof runesMintParamsSchema>,
  v.InferOutput<typeof runesMintResultSchema>
>;
