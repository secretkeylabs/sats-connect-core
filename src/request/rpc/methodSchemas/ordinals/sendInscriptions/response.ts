import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { ordinalsMethods } from '../../../../methods';

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
