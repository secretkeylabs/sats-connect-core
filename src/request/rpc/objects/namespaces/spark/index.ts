import type { ExactObject } from 'src/request/exact';
import { SparkMethod, sparkMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type SparkFlashnetClawbackFundsRequest,
  sparkFlashnetClawbackFundsRequestSchema,
  type SparkFlashnetClawbackFundsSuccessResponse,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
} from './methods/flashnetClawbackFunds';
import {
  type SparkFlashnetExecuteRouteSwapRequest,
  sparkFlashnetExecuteRouteSwapRequestSchema,
  type SparkFlashnetExecuteRouteSwapSuccessResponse,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
} from './methods/flashnetExecuteRouteSwap';
import {
  type SparkFlashnetExecuteSwapRequest,
  sparkFlashnetExecuteSwapRequestSchema,
  type SparkFlashnetExecuteSwapSuccessResponse,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
} from './methods/flashnetExecuteSwap';
import {
  type SparkGetClawbackEligibleTransfersRequest,
  sparkGetClawbackEligibleTransfersRequestSchema,
  type SparkGetClawbackEligibleTransfersSuccessResponse,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
} from './methods/flashnetGetClawbackEligibleTransfers';
import {
  type SparkFlashnetGetJwtRequest,
  sparkFlashnetGetJwtRequestSchema,
  type SparkFlashnetGetJwtSuccessResponse,
  sparkFlashnetGetJwtSuccessResponseSchema,
} from './methods/flashnetGetJwt';
import {
  type SparkFlashnetSignIntentRequest,
  sparkFlashnetSignIntentRequestSchema,
  type SparkFlashnetSignIntentSuccessResponse,
  sparkFlashnetSignIntentSuccessResponseSchema,
} from './methods/flashnetSignIntent';
import {
  type SparkFlashnetSignStructuredMessageRequest,
  sparkFlashnetSignStructuredMessageRequestSchema,
  type SparkFlashnetSignStructuredMessageSuccessResponse,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
} from './methods/flashnetSignStructuredMessage';
import {
  type SparkGetAddressesRequest,
  sparkGetAddressesRequestSchema,
  type SparkGetAddressesSuccessResponse,
  sparkGetAddressesSuccessResponseSchema,
} from './methods/getAddresses';
import {
  type SparkGetAddressesV2Request,
  sparkGetAddressesV2RequestSchema,
  type SparkGetAddressesV2SuccessResponse,
  sparkGetAddressesV2SuccessResponseSchema,
} from './methods/getAddressesV2';
import {
  type SparkGetBalanceRequest,
  sparkGetBalanceRequestSchema,
  type SparkGetBalanceSuccessResponse,
  sparkGetBalanceSuccessResponseSchema,
} from './methods/getBalance';
import {
  type SparkSignMessageRequest,
  sparkSignMessageRequestSchema,
  type SparkSignMessageSuccessResponse,
  sparkSignMessageSuccessResponseSchema,
} from './methods/signMessage';
import {
  type SparkTransferRequest,
  sparkTransferRequestSchema,
  type SparkTransferSuccessResponse,
  sparkTransferSuccessResponseSchema,
} from './methods/transfer';
import {
  type SparkTransferTokenRequest,
  sparkTransferTokenRequestSchema,
  type SparkTransferTokenSuccessResponse,
  sparkTransferTokenSuccessResponseSchema,
} from './methods/transferToken';

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
