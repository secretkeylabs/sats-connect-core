import type { ExactObject } from '../../../exact';
import { StacksMethod, stacksMethods } from '../../../methods';
import {
  type StacksCallContractRequest,
  stacksCallContractRequestSchema,
  type StacksCallContractSuccessResponse,
  stacksCallContractSuccessResponseSchema,
} from './callContract';
import {
  type StacksDeployContractRequest,
  stacksDeployContractRequestSchema,
  type StacksDeployContractSuccessResponse,
  stacksDeployContractSuccessResponseSchema,
} from './deployContract';
import {
  type StacksGetAccountsRequest,
  stacksGetAccountsRequestSchema,
  type StacksGetAccountsSuccessResponse,
  stacksGetAccountsSuccessResponseSchema,
} from './getAccounts';
import {
  type StacksGetAddressesRequest,
  stacksGetAddressesRequestSchema,
  type StacksGetAddressesSuccessResponse,
  stacksGetAddressesSuccessResponseSchema,
} from './getAddresses';
import {
  type StacksGetAddressesV2Request,
  stacksGetAddressesV2RequestSchema,
  type StacksGetAddressesV2SuccessResponse,
  stacksGetAddressesV2SuccessResponseSchema,
} from './getAddressesV2';
import {
  type StacksSignMessageRequest,
  stacksSignMessageRequestSchema,
  type StacksSignMessageSuccessResponse,
  stacksSignMessageSuccessResponseSchema,
} from './signMessage';
import {
  type StacksSignStructuredMessageRequest,
  stacksSignStructuredMessageRequestSchema,
  type StacksSignStructuredMessageSuccessResponse,
  stacksSignStructuredMessageSuccessResponseSchema,
} from './signStructuredMessage';
import {
  type StacksSignTransactionRequest,
  stacksSignTransactionRequestSchema,
  type StacksSignTransactionSuccessResponse,
  stacksSignTransactionSuccessResponseSchema,
} from './signTransaction';
import {
  type StacksSignTransactionsRequest,
  stacksSignTransactionsRequestSchema,
  type StacksSignTransactionsSuccessResponse,
  stacksSignTransactionsSuccessResponseSchema,
} from './signTransactions';
import {
  type StacksTransferStxRequest,
  stacksTransferStxRequestSchema,
  type StacksTransferStxSuccessResponse,
  stacksTransferStxSuccessResponseSchema,
} from './transferStx';

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

export const stacksRequestSchemas = [
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
] as const;

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

export const stacksSuccessResponseSchemas = [
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
] as const;
