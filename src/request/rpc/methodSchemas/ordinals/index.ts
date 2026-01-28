import type { ExactObject } from '../../../exact';
import { OrdinalsMethod, ordinalsMethods } from '../../../methods';
import {
  type OrdinalsGetInscriptionsRequest,
  ordinalsGetInscriptionsRequestSchema,
  type OrdinalsGetInscriptionsSuccessResponse,
  ordinalsGetInscriptionsSuccessResponseSchema,
} from './getInscriptions';
import {
  type OrdinalsSendInscriptionsRequest,
  ordinalsSendInscriptionsRequestSchema,
  type OrdinalsSendInscriptionsSuccessResponse,
  ordinalsSendInscriptionsSuccessResponseSchema,
} from './sendInscriptions';

export type OrdinalsRequests = ExactObject<
  OrdinalsMethod,
  {
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsRequest;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsRequest;
  }
>;

export const ordinalsRequestSchemas = [
  ordinalsGetInscriptionsRequestSchema,
  ordinalsSendInscriptionsRequestSchema,
] as const;

export type OrdinalsSuccessResponses = ExactObject<
  OrdinalsMethod,
  {
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsSuccessResponse;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsSuccessResponse;
  }
>;

export const ordinalsSuccessResponseSchemas = [
  ordinalsGetInscriptionsSuccessResponseSchema,
  ordinalsSendInscriptionsSuccessResponseSchema,
] as const;
