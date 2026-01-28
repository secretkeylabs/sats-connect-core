import { runesMethods } from '../../../methods';
import type { ExactObject } from '../../../exact';

// Runes request imports
import {
  type RunesEstimateEtchRequest,
  runesEstimateEtchRequestSchema,
} from './estimateEtch/request';
import {
  type RunesEstimateMintRequest,
  runesEstimateMintRequestSchema,
} from './estimateMint/request';
import {
  type RunesEstimateRbfOrderRequest,
  runesEstimateRbfOrderRequestSchema,
} from './estimateRbfOrder/request';
import { type RunesEtchRequest, runesEtchRequestSchema } from './etch/request';
import { type RunesGetBalanceRequest, runesGetBalanceRequestSchema } from './getBalance/request';
import { type RunesGetOrderRequest, runesGetOrderRequestSchema } from './getOrder/request';
import { type RunesMintRequest, runesMintRequestSchema } from './mint/request';
import { type RunesRbfOrderRequest, runesRbfOrderRequestSchema } from './rbfOrder/request';
import { type RunesTransferRequest, runesTransferRequestSchema } from './transfer/request';

export type RunesRequests = ExactObject<
  (typeof runesMethods)[keyof typeof runesMethods],
  {
    [runesMethods.runes_estimateEtch]: RunesEstimateEtchRequest;
    [runesMethods.runes_estimateMint]: RunesEstimateMintRequest;
    [runesMethods.runes_estimateRbfOrder]: RunesEstimateRbfOrderRequest;
    [runesMethods.runes_etch]: RunesEtchRequest;
    [runesMethods.runes_getBalance]: RunesGetBalanceRequest;
    [runesMethods.runes_getOrder]: RunesGetOrderRequest;
    [runesMethods.runes_mint]: RunesMintRequest;
    [runesMethods.runes_rbfOrder]: RunesRbfOrderRequest;
    [runesMethods.runes_transfer]: RunesTransferRequest;
  }
>;

export const runesRequestSchemas = [
  runesEstimateEtchRequestSchema,
  runesEstimateMintRequestSchema,
  runesEstimateRbfOrderRequestSchema,
  runesEtchRequestSchema,
  runesGetBalanceRequestSchema,
  runesGetOrderRequestSchema,
  runesMintRequestSchema,
  runesRbfOrderRequestSchema,
  runesTransferRequestSchema,
] as const;

// Runes response imports
import {
  type RunesEstimateEtchSuccessResponse,
  runesEstimateEtchSuccessResponseSchema,
} from './estimateEtch/response';
import {
  type RunesEstimateMintSuccessResponse,
  runesEstimateMintSuccessResponseSchema,
} from './estimateMint/response';
import {
  type RunesEstimateRbfOrderSuccessResponse,
  runesEstimateRbfOrderSuccessResponseSchema,
} from './estimateRbfOrder/response';
import { type RunesEtchSuccessResponse, runesEtchSuccessResponseSchema } from './etch/response';
import {
  type RunesGetBalanceSuccessResponse,
  runesGetBalanceSuccessResponseSchema,
} from './getBalance/response';
import {
  type RunesGetOrderSuccessResponse,
  runesGetOrderSuccessResponseSchema,
} from './getOrder/response';
import { type RunesMintSuccessResponse, runesMintSuccessResponseSchema } from './mint/response';
import {
  type RunesRbfOrderSuccessResponse,
  runesRbfOrderSuccessResponseSchema,
} from './rbfOrder/response';
import {
  type RunesTransferSuccessResponse,
  runesTransferSuccessResponseSchema,
} from './transfer/response';

export type RunesSuccessResponses = ExactObject<
  (typeof runesMethods)[keyof typeof runesMethods],
  {
    [runesMethods.runes_estimateEtch]: RunesEstimateEtchSuccessResponse;
    [runesMethods.runes_estimateMint]: RunesEstimateMintSuccessResponse;
    [runesMethods.runes_estimateRbfOrder]: RunesEstimateRbfOrderSuccessResponse;
    [runesMethods.runes_etch]: RunesEtchSuccessResponse;
    [runesMethods.runes_getBalance]: RunesGetBalanceSuccessResponse;
    [runesMethods.runes_getOrder]: RunesGetOrderSuccessResponse;
    [runesMethods.runes_mint]: RunesMintSuccessResponse;
    [runesMethods.runes_rbfOrder]: RunesRbfOrderSuccessResponse;
    [runesMethods.runes_transfer]: RunesTransferSuccessResponse;
  }
>;

export const runesSuccessResponseSchemas = [
  runesEstimateEtchSuccessResponseSchema,
  runesEstimateMintSuccessResponseSchema,
  runesEstimateRbfOrderSuccessResponseSchema,
  runesEtchSuccessResponseSchema,
  runesGetBalanceSuccessResponseSchema,
  runesGetOrderSuccessResponseSchema,
  runesMintSuccessResponseSchema,
  runesRbfOrderSuccessResponseSchema,
  runesTransferSuccessResponseSchema,
] as const;
