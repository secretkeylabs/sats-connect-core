import type { ExactObject } from '../../../exact';
import { SparkMethod, sparkMethods } from '../../../methods';
import {
  type SparkFlashnetClawbackFundsRequest,
  sparkFlashnetClawbackFundsRequestSchema,
  type SparkFlashnetClawbackFundsSuccessResponse,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
} from './flashnetClawbackFunds';
import {
  type SparkFlashnetExecuteRouteSwapRequest,
  sparkFlashnetExecuteRouteSwapRequestSchema,
  type SparkFlashnetExecuteRouteSwapSuccessResponse,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
} from './flashnetExecuteRouteSwap';
import {
  type SparkFlashnetExecuteSwapRequest,
  sparkFlashnetExecuteSwapRequestSchema,
  type SparkFlashnetExecuteSwapSuccessResponse,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
} from './flashnetExecuteSwap';
import {
  type SparkFlashnetGetJwtRequest,
  sparkFlashnetGetJwtRequestSchema,
  type SparkFlashnetGetJwtSuccessResponse,
  sparkFlashnetGetJwtSuccessResponseSchema,
} from './flashnetGetJwt';
import {
  type SparkFlashnetSignIntentRequest,
  sparkFlashnetSignIntentRequestSchema,
  type SparkFlashnetSignIntentSuccessResponse,
  sparkFlashnetSignIntentSuccessResponseSchema,
} from './flashnetSignIntent';
import {
  type SparkFlashnetSignStructuredMessageRequest,
  sparkFlashnetSignStructuredMessageRequestSchema,
  type SparkFlashnetSignStructuredMessageSuccessResponse,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
} from './flashnetSignStructuredMessage';
import {
  type SparkGetAddressesRequest,
  sparkGetAddressesRequestSchema,
  type SparkGetAddressesSuccessResponse,
  sparkGetAddressesSuccessResponseSchema,
} from './getAddresses';
import {
  type SparkGetAddressesV2Request,
  sparkGetAddressesV2RequestSchema,
  type SparkGetAddressesV2SuccessResponse,
  sparkGetAddressesV2SuccessResponseSchema,
} from './getAddressesV2';
import {
  type SparkGetBalanceRequest,
  sparkGetBalanceRequestSchema,
  type SparkGetBalanceSuccessResponse,
  sparkGetBalanceSuccessResponseSchema,
} from './getBalance';
import {
  type SparkGetClawbackEligibleTransfersRequest,
  sparkGetClawbackEligibleTransfersRequestSchema,
  type SparkGetClawbackEligibleTransfersSuccessResponse,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
} from './getClawbackEligibleTransfers';
import {
  type SparkSignMessageRequest,
  sparkSignMessageRequestSchema,
  type SparkSignMessageSuccessResponse,
  sparkSignMessageSuccessResponseSchema,
} from './signMessage';
import {
  type SparkTransferRequest,
  sparkTransferRequestSchema,
  type SparkTransferSuccessResponse,
  sparkTransferSuccessResponseSchema,
} from './transfer';
import {
  type SparkTransferTokenRequest,
  sparkTransferTokenRequestSchema,
  type SparkTransferTokenSuccessResponse,
  sparkTransferTokenSuccessResponseSchema,
} from './transferToken';

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
    [sparkMethods.spark_getClawbackEligibleTransfers]: SparkGetClawbackEligibleTransfersRequest;
  }
>;

export const sparkRequestSchemas = [
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
] as const;

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
    [sparkMethods.spark_getClawbackEligibleTransfers]: SparkGetClawbackEligibleTransfersSuccessResponse;
  }
>;

export const sparkSuccessResponseSchemas = [
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
] as const;
