import { sparkMethods } from '../../../methods';
import type { ExactObject } from '../../../exact';

// Spark request imports
import {
  type SparkGetAddressesRequest,
  sparkGetAddressesRequestSchema,
} from './getAddresses/request';
import {
  type SparkGetAddressesV2Request,
  sparkGetAddressesV2RequestSchema,
} from './getAddressesV2/request';
import { type SparkGetBalanceRequest, sparkGetBalanceRequestSchema } from './getBalance/request';
import { type SparkTransferRequest, sparkTransferRequestSchema } from './transfer/request';
import {
  type SparkTransferTokenRequest,
  sparkTransferTokenRequestSchema,
} from './transferToken/request';
import { type SparkSignMessageRequest, sparkSignMessageRequestSchema } from './signMessage/request';
import {
  type SparkFlashnetGetJwtRequest,
  sparkFlashnetGetJwtRequestSchema,
} from './flashnetGetJwt/request';
import {
  type SparkFlashnetSignIntentRequest,
  sparkFlashnetSignIntentRequestSchema,
} from './flashnetSignIntent/request';
import {
  type SparkFlashnetSignStructuredMessageRequest,
  sparkFlashnetSignStructuredMessageRequestSchema,
} from './flashnetSignStructuredMessage/request';
import {
  type SparkFlashnetExecuteSwapRequest,
  sparkFlashnetExecuteSwapRequestSchema,
} from './flashnetExecuteSwap/request';
import {
  type SparkFlashnetExecuteRouteSwapRequest,
  sparkFlashnetExecuteRouteSwapRequestSchema,
} from './flashnetExecuteRouteSwap/request';
import {
  type SparkFlashnetClawbackFundsRequest,
  sparkFlashnetClawbackFundsRequestSchema,
} from './flashnetClawbackFunds/request';
import {
  type SparkGetClawbackEligibleTransfersRequest,
  sparkGetClawbackEligibleTransfersRequestSchema,
} from './getClawbackEligibleTransfers/request';

export type SparkRequests = ExactObject<
  (typeof sparkMethods)[keyof typeof sparkMethods],
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

// Spark response imports
import {
  type SparkGetAddressesSuccessResponse,
  sparkGetAddressesSuccessResponseSchema,
} from './getAddresses/response';
import {
  type SparkGetAddressesV2SuccessResponse,
  sparkGetAddressesV2SuccessResponseSchema,
} from './getAddressesV2/response';
import {
  type SparkGetBalanceSuccessResponse,
  sparkGetBalanceSuccessResponseSchema,
} from './getBalance/response';
import {
  type SparkTransferSuccessResponse,
  sparkTransferSuccessResponseSchema,
} from './transfer/response';
import {
  type SparkTransferTokenSuccessResponse,
  sparkTransferTokenSuccessResponseSchema,
} from './transferToken/response';
import {
  type SparkSignMessageSuccessResponse,
  sparkSignMessageSuccessResponseSchema,
} from './signMessage/response';
import {
  type SparkFlashnetGetJwtSuccessResponse,
  sparkFlashnetGetJwtSuccessResponseSchema,
} from './flashnetGetJwt/response';
import {
  type SparkFlashnetSignIntentSuccessResponse,
  sparkFlashnetSignIntentSuccessResponseSchema,
} from './flashnetSignIntent/response';
import {
  type SparkFlashnetSignStructuredMessageSuccessResponse,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
} from './flashnetSignStructuredMessage/response';
import {
  type SparkFlashnetExecuteSwapSuccessResponse,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
} from './flashnetExecuteSwap/response';
import {
  type SparkFlashnetExecuteRouteSwapSuccessResponse,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
} from './flashnetExecuteRouteSwap/response';
import {
  type SparkFlashnetClawbackFundsSuccessResponse,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
} from './flashnetClawbackFunds/response';
import {
  type SparkGetClawbackEligibleTransfersSuccessResponse,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
} from './getClawbackEligibleTransfers/response';

export type SparkSuccessResponses = ExactObject<
  (typeof sparkMethods)[keyof typeof sparkMethods],
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
