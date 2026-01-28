import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { ordinalsMethods } from 'src/request/methods';
import * as v from 'valibot';

export const ordinalsGetInscriptionsResultSchema = v.object({
  total: v.number(),
  limit: v.number(),
  offset: v.number(),
  inscriptions: v.array(
    v.object({
      inscriptionId: v.string(),
      inscriptionNumber: v.string(),
      address: v.string(),
      collectionName: v.optional(v.string()),
      postage: v.string(),
      contentLength: v.string(),
      contentType: v.string(),
      timestamp: v.number(),
      offset: v.number(),
      genesisTransaction: v.string(),
      output: v.string(),
    })
  ),
});

export type OrdinalsGetInscriptionsResult = v.InferOutput<
  typeof ordinalsGetInscriptionsResultSchema
>;

export const ordinalsGetInscriptionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: ordinalsGetInscriptionsResultSchema,
  method: ordinalsMethods.ord_getInscriptions,
});

export type OrdinalsGetInscriptionsSuccessResponse = v.InferOutput<
  typeof ordinalsGetInscriptionsSuccessResponseSchema
>;
