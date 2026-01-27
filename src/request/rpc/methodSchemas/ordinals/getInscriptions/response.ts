import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { ordinalsMethods } from '../../../../methods';

export const ordinalsGetInscriptionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
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
  }),
  method: ordinalsMethods.ord_getInscriptions,
});

export type OrdinalsGetInscriptionsSuccessResponse = v.InferOutput<
  typeof ordinalsGetInscriptionsSuccessResponseSchema
>;
