import { createRequestSchema } from 'src/request/createRequestSchema';
import { ordinalsMethods } from 'src/request/methods';
import * as v from 'valibot';

export const ordinalsGetInscriptionsParamsSchema = v.object({
  offset: v.number(),
  limit: v.number(),
});

export type OrdinalsGetInscriptionsParams = v.InferOutput<
  typeof ordinalsGetInscriptionsParamsSchema
>;

export const ordinalsGetInscriptionsRequestSchema = createRequestSchema({
  paramsSchema: ordinalsGetInscriptionsParamsSchema,
  method: ordinalsMethods.ord_getInscriptions,
});

export type OrdinalsGetInscriptionsRequest = v.InferOutput<
  typeof ordinalsGetInscriptionsRequestSchema
>;
