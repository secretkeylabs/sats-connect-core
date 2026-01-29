import type { ExactObject } from 'src/request/exact';
import { SparkMethod, sparkMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type SparkFlashnetClawbackFundsRequest,
  sparkFlashnetClawbackFundsRequestSchema,
  type SparkFlashnetClawbackFundsSuccessResponse,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
  type SparkFlashnetExecuteRouteSwapRequest,
  sparkFlashnetExecuteRouteSwapRequestSchema,
  type SparkFlashnetExecuteRouteSwapSuccessResponse,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
  type SparkFlashnetExecuteSwapRequest,
  sparkFlashnetExecuteSwapRequestSchema,
  type SparkFlashnetExecuteSwapSuccessResponse,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
  type SparkFlashnetGetJwtRequest,
  sparkFlashnetGetJwtRequestSchema,
  type SparkFlashnetGetJwtSuccessResponse,
  sparkFlashnetGetJwtSuccessResponseSchema,
  type SparkFlashnetSignIntentRequest,
  sparkFlashnetSignIntentRequestSchema,
  type SparkFlashnetSignIntentSuccessResponse,
  sparkFlashnetSignIntentSuccessResponseSchema,
  type SparkFlashnetSignStructuredMessageRequest,
  sparkFlashnetSignStructuredMessageRequestSchema,
  type SparkFlashnetSignStructuredMessageSuccessResponse,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
  type SparkGetAddressesRequest,
  sparkGetAddressesRequestSchema,
  type SparkGetAddressesSuccessResponse,
  sparkGetAddressesSuccessResponseSchema,
  type SparkGetAddressesV2Request,
  sparkGetAddressesV2RequestSchema,
  type SparkGetAddressesV2SuccessResponse,
  sparkGetAddressesV2SuccessResponseSchema,
  type SparkGetBalanceRequest,
  sparkGetBalanceRequestSchema,
  type SparkGetBalanceSuccessResponse,
  sparkGetBalanceSuccessResponseSchema,
  type SparkGetClawbackEligibleTransfersRequest,
  sparkGetClawbackEligibleTransfersRequestSchema,
  type SparkGetClawbackEligibleTransfersSuccessResponse,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
  type SparkSignMessageRequest,
  sparkSignMessageRequestSchema,
  type SparkSignMessageSuccessResponse,
  sparkSignMessageSuccessResponseSchema,
  type SparkTransferRequest,
  sparkTransferRequestSchema,
  type SparkTransferSuccessResponse,
  sparkTransferSuccessResponseSchema,
  type SparkTransferTokenRequest,
  sparkTransferTokenRequestSchema,
  type SparkTransferTokenSuccessResponse,
  sparkTransferTokenSuccessResponseSchema,
} from './methods';

export type SparkRequests = ExactObject<
  SparkMethod,
  {
    [sparkMethods.spark_getAddresses]: SparkGetAddressesRequest;
    [sparkMethods.spark_getAddressesV2]: SparkGetAddressesV2Request;
    [sparkMethods.spark_getBalance]: SparkGetBalanceRequest;
    [sparkMethods.spark_transfer]: SparkTransferRequest;
    [sparkMethods.spark_transferToken]: SparkTransferTokenRequest;
    [sparkMethods.spark_signMessage]: SparkSignMessageRequest;
    [sparkMethods.spark_flashnet_getJwt]: SparkFlashnetGetJwtRequest;
    [sparkMethods.spark_flashnet_signIntent]: SparkFlashnetSignIntentRequest;
    [sparkMethods.spark_flashnet_signStructuredMessage]: SparkFlashnetSignStructuredMessageRequest;
    [sparkMethods.spark_flashnet_executeSwap]: SparkFlashnetExecuteSwapRequest;
    [sparkMethods.spark_flashnet_executeRouteSwap]: SparkFlashnetExecuteRouteSwapRequest;
    [sparkMethods.spark_flashnet_clawbackFunds]: SparkFlashnetClawbackFundsRequest;
    [sparkMethods.spark_flashnet_getClawbackEligibleTransfers]: SparkGetClawbackEligibleTransfersRequest;
  }
>;

export const sparkRequestSchema = v.variant('method', [
  sparkGetAddressesRequestSchema,
  sparkGetAddressesV2RequestSchema,
  sparkGetBalanceRequestSchema,
  sparkTransferRequestSchema,
  sparkTransferTokenRequestSchema,
  sparkSignMessageRequestSchema,
  sparkFlashnetGetJwtRequestSchema,
  sparkFlashnetSignIntentRequestSchema,
  sparkFlashnetSignStructuredMessageRequestSchema,
  sparkFlashnetExecuteSwapRequestSchema,
  sparkFlashnetExecuteRouteSwapRequestSchema,
  sparkFlashnetClawbackFundsRequestSchema,
  sparkGetClawbackEligibleTransfersRequestSchema,
]);

export type SparkSuccessResponses = ExactObject<
  SparkMethod,
  {
    [sparkMethods.spark_getAddresses]: SparkGetAddressesSuccessResponse;
    [sparkMethods.spark_getAddressesV2]: SparkGetAddressesV2SuccessResponse;
    [sparkMethods.spark_getBalance]: SparkGetBalanceSuccessResponse;
    [sparkMethods.spark_transfer]: SparkTransferSuccessResponse;
    [sparkMethods.spark_transferToken]: SparkTransferTokenSuccessResponse;
    [sparkMethods.spark_signMessage]: SparkSignMessageSuccessResponse;
    [sparkMethods.spark_flashnet_getJwt]: SparkFlashnetGetJwtSuccessResponse;
    [sparkMethods.spark_flashnet_signIntent]: SparkFlashnetSignIntentSuccessResponse;
    [sparkMethods.spark_flashnet_signStructuredMessage]: SparkFlashnetSignStructuredMessageSuccessResponse;
    [sparkMethods.spark_flashnet_executeSwap]: SparkFlashnetExecuteSwapSuccessResponse;
    [sparkMethods.spark_flashnet_executeRouteSwap]: SparkFlashnetExecuteRouteSwapSuccessResponse;
    [sparkMethods.spark_flashnet_clawbackFunds]: SparkFlashnetClawbackFundsSuccessResponse;
    [sparkMethods.spark_flashnet_getClawbackEligibleTransfers]: SparkGetClawbackEligibleTransfersSuccessResponse;
  }
>;

export const sparkSuccessResponseSchema = v.variant('~sats-connect-method', [
  sparkGetAddressesSuccessResponseSchema,
  sparkGetAddressesV2SuccessResponseSchema,
  sparkGetBalanceSuccessResponseSchema,
  sparkTransferSuccessResponseSchema,
  sparkTransferTokenSuccessResponseSchema,
  sparkSignMessageSuccessResponseSchema,
  sparkFlashnetGetJwtSuccessResponseSchema,
  sparkFlashnetSignIntentSuccessResponseSchema,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
]);

export * from './methods';
