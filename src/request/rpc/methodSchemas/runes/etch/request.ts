import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

const etchTermsSchema = v.object({
  amount: v.optional(v.string()),
  cap: v.optional(v.string()),
  heightStart: v.optional(v.string()),
  heightEnd: v.optional(v.string()),
  offsetStart: v.optional(v.string()),
  offsetEnd: v.optional(v.string()),
});

const inscriptionDetailsSchema = v.object({
  contentType: v.string(),
  contentBase64: v.string(),
});

export const runesEtchRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    runeName: v.string(),
    divisibility: v.optional(v.number()),
    symbol: v.optional(v.string()),
    premine: v.optional(v.string()),
    isMintable: v.boolean(),
    terms: v.optional(etchTermsSchema),
    inscriptionDetails: v.optional(inscriptionDetailsSchema),
    delegateInscriptionId: v.optional(v.string()),
    destinationAddress: v.string(),
    refundAddress: v.string(),
    feeRate: v.number(),
    appServiceFee: v.optional(v.number()),
    appServiceFeeAddress: v.optional(v.string()),
  }),
  method: runesMethods.runes_etch,
});

export type RunesEtchRequest = v.InferOutput<typeof runesEtchRequestSchema>;
