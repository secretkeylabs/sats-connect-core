import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { ordinalsMethods } from 'src/request/methods';

export const ordinalsGetInscriptionsRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    offset: v.number(),
    limit: v.number(),
  }),
  method: ordinalsMethods.ord_getInscriptions,
});

export type OrdinalsGetInscriptionsRequest = v.InferOutput<
  typeof ordinalsGetInscriptionsRequestSchema
>;
