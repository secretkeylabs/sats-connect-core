import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';
import { BitcoinNetworkType } from '../../../../../types';

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

export const runesEstimateEtchRequestSchema = createRequestSchema({
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
    feeRate: v.number(),
    appServiceFee: v.optional(v.number()),
    appServiceFeeAddress: v.optional(v.string()),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_estimateEtch,
});

export type RunesEstimateEtchRequest = v.InferOutput<typeof runesEstimateEtchRequestSchema>;
