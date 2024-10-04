import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const runesEtchMethodName = 'runes_etch';

const etchTermsSchema = v.object({
  amount: v.string(),
  cap: v.string(),
  heightStart: v.optional(v.string()),
  heightEnd: v.optional(v.string()),
  offsetStart: v.optional(v.string()),
  offsetEnd: v.optional(v.string()),
});
const inscriptionDetailsSchema = v.object({
  contentType: v.string(),
  contentBase64: v.string(),
});
export const runesEtchParamsSchema = v.object({
  runeName: v.string(),
  divisibility: v.optional(v.number()),
  symbol: v.optional(v.string()),
  premine: v.optional(v.string()),
  isMintable: v.boolean(),
  delegateInscriptionId: v.optional(v.string()),
  destinationAddress: v.string(),
  refundAddress: v.string(),
  feeRate: v.number(),
  appServiceFee: v.optional(v.number()),
  appServiceFeeAddress: v.optional(v.string()),
  terms: v.optional(etchTermsSchema),
  inscriptionDetails: v.optional(inscriptionDetailsSchema),
});
export type RunesEtchParams = v.InferOutput<typeof runesEtchParamsSchema>;

export const runesEtchResultSchema = v.object({
  orderId: v.string(),
  fundTransactionId: v.string(),
  fundingAddress: v.string(),
});
export type RunesEtchResult = v.InferOutput<typeof runesEtchResultSchema>;

export const runesEtchRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(runesEtchMethodName),
    params: runesEtchParamsSchema,
    id: v.string(),
  }).entries,
});
export type RunesEtchRequestMessage = v.InferOutput<typeof runesEtchRequestMessageSchema>;

export type RunesEtch = MethodParamsAndResult<
  v.InferOutput<typeof runesEtchParamsSchema>,
  v.InferOutput<typeof runesEtchResultSchema>
>;
