import type { ExactObject } from 'src/request/exact';
import { RunesMethod, runesMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type RunesEstimateEtchRequest,
  runesEstimateEtchRequestSchema,
  type RunesEstimateEtchSuccessResponse,
  runesEstimateEtchSuccessResponseSchema,
} from './methods/estimateEtch';
import {
  type RunesEstimateMintRequest,
  runesEstimateMintRequestSchema,
  type RunesEstimateMintSuccessResponse,
  runesEstimateMintSuccessResponseSchema,
} from './methods/estimateMint';
import {
  type RunesEstimateRbfOrderRequest,
  runesEstimateRbfOrderRequestSchema,
  type RunesEstimateRbfOrderSuccessResponse,
  runesEstimateRbfOrderSuccessResponseSchema,
} from './methods/estimateRbfOrder';
import {
  type RunesEtchRequest,
  runesEtchRequestSchema,
  type RunesEtchSuccessResponse,
  runesEtchSuccessResponseSchema,
} from './methods/etch';
import {
  type RunesGetBalanceRequest,
  runesGetBalanceRequestSchema,
  type RunesGetBalanceSuccessResponse,
  runesGetBalanceSuccessResponseSchema,
} from './methods/getBalance';
import {
  type RunesGetOrderRequest,
  runesGetOrderRequestSchema,
  type RunesGetOrderSuccessResponse,
  runesGetOrderSuccessResponseSchema,
} from './methods/getOrder';
import {
  type RunesMintRequest,
  runesMintRequestSchema,
  type RunesMintSuccessResponse,
  runesMintSuccessResponseSchema,
} from './methods/mint';
import {
  type RunesRbfOrderRequest,
  runesRbfOrderRequestSchema,
  type RunesRbfOrderSuccessResponse,
  runesRbfOrderSuccessResponseSchema,
} from './methods/rbfOrder';
import {
  type RunesTransferRequest,
  runesTransferRequestSchema,
  type RunesTransferSuccessResponse,
  runesTransferSuccessResponseSchema,
} from './methods/transfer';

export type RunesRequests = ExactObject<
  RunesMethod,
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

export const runesRequestSchema = v.variant('method', [
  runesEstimateEtchRequestSchema,
  runesEstimateMintRequestSchema,
  runesEstimateRbfOrderRequestSchema,
  runesEtchRequestSchema,
  runesGetBalanceRequestSchema,
  runesGetOrderRequestSchema,
  runesMintRequestSchema,
  runesRbfOrderRequestSchema,
  runesTransferRequestSchema,
]);

export type RunesSuccessResponses = ExactObject<
  RunesMethod,
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

export const runesSuccessResponseSchema = v.variant('~sats-connect-method', [
  runesEstimateEtchSuccessResponseSchema,
  runesEstimateMintSuccessResponseSchema,
  runesEstimateRbfOrderSuccessResponseSchema,
  runesEtchSuccessResponseSchema,
  runesGetBalanceSuccessResponseSchema,
  runesGetOrderSuccessResponseSchema,
  runesMintSuccessResponseSchema,
  runesRbfOrderSuccessResponseSchema,
  runesTransferSuccessResponseSchema,
]);
