import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { ordinalsMethods } from 'src/request/methods';

export const ordinalsSendInscriptionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The transaction id as a hex-encoded string.
     */
    txid: v.string(),
  }),
  method: ordinalsMethods.ord_sendInscriptions,
});

export type OrdinalsSendInscriptionsSuccessResponse = v.InferOutput<
  typeof ordinalsSendInscriptionsSuccessResponseSchema
>;
