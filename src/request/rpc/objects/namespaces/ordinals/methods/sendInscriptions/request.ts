import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { ordinalsMethods } from 'src/request/methods';

export const ordinalsSendInscriptionsRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    transfers: v.array(
      v.object({
        address: v.string(),
        inscriptionId: v.string(),
      })
    ),
  }),
  method: ordinalsMethods.ord_sendInscriptions,
});

export type OrdinalsSendInscriptionsRequest = v.InferOutput<
  typeof ordinalsSendInscriptionsRequestSchema
>;
