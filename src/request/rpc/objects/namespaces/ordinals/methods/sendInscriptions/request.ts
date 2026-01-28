import { createRequestSchema } from 'src/request/createRequestSchema';
import { ordinalsMethods } from 'src/request/methods';
import * as v from 'valibot';

export const ordinalsSendInscriptionsParamsSchema = v.object({
  transfers: v.array(
    v.object({
      address: v.string(),
      inscriptionId: v.string(),
    })
  ),
});

export type OrdinalsSendInscriptionsParams = v.InferOutput<
  typeof ordinalsSendInscriptionsParamsSchema
>;

export const ordinalsSendInscriptionsRequestSchema = createRequestSchema({
  paramsSchema: ordinalsSendInscriptionsParamsSchema,
  method: ordinalsMethods.ord_sendInscriptions,
});

export type OrdinalsSendInscriptionsRequest = v.InferOutput<
  typeof ordinalsSendInscriptionsRequestSchema
>;
