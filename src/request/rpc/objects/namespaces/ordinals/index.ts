import type { ExactObject } from 'src/request/exact';
import { OrdinalsMethod, ordinalsMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type OrdinalsGetInscriptionsRequest,
  ordinalsGetInscriptionsRequestSchema,
  type OrdinalsGetInscriptionsSuccessResponse,
  ordinalsGetInscriptionsSuccessResponseSchema,
  type OrdinalsSendInscriptionsRequest,
  ordinalsSendInscriptionsRequestSchema,
  type OrdinalsSendInscriptionsSuccessResponse,
  ordinalsSendInscriptionsSuccessResponseSchema,
} from './methods';

export type OrdinalsRequests = ExactObject<
  OrdinalsMethod,
  {
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsRequest;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsRequest;
  }
>;

export const ordinalsRequestSchema = v.variant('method', [
  ordinalsGetInscriptionsRequestSchema,
  ordinalsSendInscriptionsRequestSchema,
]);

export type OrdinalsSuccessResponses = ExactObject<
  OrdinalsMethod,
  {
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsSuccessResponse;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsSuccessResponse;
  }
>;

export const ordinalsSuccessResponseSchema = v.variant('~sats-connect-method', [
  ordinalsGetInscriptionsSuccessResponseSchema,
  ordinalsSendInscriptionsSuccessResponseSchema,
]);
