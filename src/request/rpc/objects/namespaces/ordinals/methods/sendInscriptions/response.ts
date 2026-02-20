import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { ordinalsMethods } from 'src/request/methods';
import * as v from 'valibot';

export const ordinalsSendInscriptionsResultSchema = v.object({
  /**
   * The transaction id as a hex-encoded string.
   */
  txid: v.string(),
});

export type OrdinalsSendInscriptionsResult = v.InferOutput<
  typeof ordinalsSendInscriptionsResultSchema
>;

export const ordinalsSendInscriptionsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: ordinalsSendInscriptionsResultSchema,
  method: ordinalsMethods.ord_sendInscriptions,
});

export type OrdinalsSendInscriptionsSuccessResponse = v.InferOutput<
  typeof ordinalsSendInscriptionsSuccessResponseSchema
>;
