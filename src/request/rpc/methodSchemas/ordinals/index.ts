import { ordinalsMethods } from '../../../methods';
import type { ExactObject } from '../../../exact';

// Ordinals request imports
import {
  type OrdinalsGetInscriptionsRequest,
  ordinalsGetInscriptionsRequestSchema,
} from './getInscriptions/request';
import {
  type OrdinalsSendInscriptionsRequest,
  ordinalsSendInscriptionsRequestSchema,
} from './sendInscriptions/request';

export type OrdinalsRequests = ExactObject<
  (typeof ordinalsMethods)[keyof typeof ordinalsMethods],
  {
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsRequest;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsRequest;
  }
>;

export const ordinalsRequestSchemas = [
  ordinalsGetInscriptionsRequestSchema,
  ordinalsSendInscriptionsRequestSchema,
] as const;

// Ordinals response imports
import {
  type OrdinalsGetInscriptionsSuccessResponse,
  ordinalsGetInscriptionsSuccessResponseSchema,
} from './getInscriptions/response';
import {
  type OrdinalsSendInscriptionsSuccessResponse,
  ordinalsSendInscriptionsSuccessResponseSchema,
} from './sendInscriptions/response';

export type OrdinalsSuccessResponses = ExactObject<
  (typeof ordinalsMethods)[keyof typeof ordinalsMethods],
  {
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsSuccessResponse;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsSuccessResponse;
  }
>;

export const ordinalsSuccessResponseSchemas = [
  ordinalsGetInscriptionsSuccessResponseSchema,
  ordinalsSendInscriptionsSuccessResponseSchema,
] as const;
