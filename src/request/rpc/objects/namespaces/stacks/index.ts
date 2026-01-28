import type { ExactObject } from 'src/request/exact';
import { StacksMethod, stacksMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type StacksCallContractRequest,
  stacksCallContractRequestSchema,
  type StacksCallContractSuccessResponse,
  stacksCallContractSuccessResponseSchema,
  type StacksDeployContractRequest,
  stacksDeployContractRequestSchema,
  type StacksDeployContractSuccessResponse,
  stacksDeployContractSuccessResponseSchema,
  type StacksGetAccountsRequest,
  stacksGetAccountsRequestSchema,
  type StacksGetAccountsSuccessResponse,
  stacksGetAccountsSuccessResponseSchema,
  type StacksGetAddressesRequest,
  stacksGetAddressesRequestSchema,
  type StacksGetAddressesSuccessResponse,
  stacksGetAddressesSuccessResponseSchema,
  type StacksGetAddressesV2Request,
  stacksGetAddressesV2RequestSchema,
  type StacksGetAddressesV2SuccessResponse,
  stacksGetAddressesV2SuccessResponseSchema,
  type StacksSignMessageRequest,
  stacksSignMessageRequestSchema,
  type StacksSignMessageSuccessResponse,
  stacksSignMessageSuccessResponseSchema,
  type StacksSignStructuredMessageRequest,
  stacksSignStructuredMessageRequestSchema,
  type StacksSignStructuredMessageSuccessResponse,
  stacksSignStructuredMessageSuccessResponseSchema,
  type StacksSignTransactionRequest,
  stacksSignTransactionRequestSchema,
  type StacksSignTransactionsRequest,
  stacksSignTransactionsRequestSchema,
  type StacksSignTransactionsSuccessResponse,
  stacksSignTransactionsSuccessResponseSchema,
  type StacksSignTransactionSuccessResponse,
  stacksSignTransactionSuccessResponseSchema,
  type StacksTransferStxRequest,
  stacksTransferStxRequestSchema,
  type StacksTransferStxSuccessResponse,
  stacksTransferStxSuccessResponseSchema,
} from './methods';

export type StacksRequests = ExactObject<
  StacksMethod,
  {
    [stacksMethods.stx_callContract]: StacksCallContractRequest;
    [stacksMethods.stx_deployContract]: StacksDeployContractRequest;
    [stacksMethods.stx_getAccounts]: StacksGetAccountsRequest;
    [stacksMethods.stx_getAddresses]: StacksGetAddressesRequest;
    [stacksMethods.stacks_getAddressesV2]: StacksGetAddressesV2Request;
    [stacksMethods.stx_signMessage]: StacksSignMessageRequest;
    [stacksMethods.stx_signStructuredMessage]: StacksSignStructuredMessageRequest;
    [stacksMethods.stx_signTransaction]: StacksSignTransactionRequest;
    [stacksMethods.stx_signTransactions]: StacksSignTransactionsRequest;
    [stacksMethods.stx_transferStx]: StacksTransferStxRequest;
  }
>;

export const stacksRequestSchema = v.variant('method', [
  stacksCallContractRequestSchema,
  stacksDeployContractRequestSchema,
  stacksGetAccountsRequestSchema,
  stacksGetAddressesRequestSchema,
  stacksGetAddressesV2RequestSchema,
  stacksSignMessageRequestSchema,
  stacksSignStructuredMessageRequestSchema,
  stacksSignTransactionRequestSchema,
  stacksSignTransactionsRequestSchema,
  stacksTransferStxRequestSchema,
]);

export type StacksSuccessResponses = ExactObject<
  StacksMethod,
  {
    [stacksMethods.stx_callContract]: StacksCallContractSuccessResponse;
    [stacksMethods.stx_deployContract]: StacksDeployContractSuccessResponse;
    [stacksMethods.stx_getAccounts]: StacksGetAccountsSuccessResponse;
    [stacksMethods.stx_getAddresses]: StacksGetAddressesSuccessResponse;
    [stacksMethods.stacks_getAddressesV2]: StacksGetAddressesV2SuccessResponse;
    [stacksMethods.stx_signMessage]: StacksSignMessageSuccessResponse;
    [stacksMethods.stx_signStructuredMessage]: StacksSignStructuredMessageSuccessResponse;
    [stacksMethods.stx_signTransaction]: StacksSignTransactionSuccessResponse;
    [stacksMethods.stx_signTransactions]: StacksSignTransactionsSuccessResponse;
    [stacksMethods.stx_transferStx]: StacksTransferStxSuccessResponse;
  }
>;

export const stacksSuccessResponseSchema = v.variant('~sats-connect-method', [
  stacksCallContractSuccessResponseSchema,
  stacksDeployContractSuccessResponseSchema,
  stacksGetAccountsSuccessResponseSchema,
  stacksGetAddressesSuccessResponseSchema,
  stacksGetAddressesV2SuccessResponseSchema,
  stacksSignMessageSuccessResponseSchema,
  stacksSignStructuredMessageSuccessResponseSchema,
  stacksSignTransactionSuccessResponseSchema,
  stacksSignTransactionsSuccessResponseSchema,
  stacksTransferStxSuccessResponseSchema,
]);
