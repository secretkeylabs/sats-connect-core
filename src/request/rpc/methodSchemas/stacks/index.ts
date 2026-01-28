import { stacksMethods } from '../../../methods';
import type { ExactObject } from '../../../exact';

// Stacks request imports
import {
  type StacksCallContractRequest,
  stacksCallContractRequestSchema,
} from './callContract/request';
import {
  type StacksDeployContractRequest,
  stacksDeployContractRequestSchema,
} from './deployContract/request';
import {
  type StacksGetAccountsRequest,
  stacksGetAccountsRequestSchema,
} from './getAccounts/request';
import {
  type StacksGetAddressesRequest,
  stacksGetAddressesRequestSchema,
} from './getAddresses/request';
import {
  type StacksGetAddressesV2Request,
  stacksGetAddressesV2RequestSchema,
} from './getAddressesV2/request';
import {
  type StacksSignMessageRequest,
  stacksSignMessageRequestSchema,
} from './signMessage/request';
import {
  type StacksSignStructuredMessageRequest,
  stacksSignStructuredMessageRequestSchema,
} from './signStructuredMessage/request';
import {
  type StacksSignTransactionRequest,
  stacksSignTransactionRequestSchema,
} from './signTransaction/request';
import {
  type StacksSignTransactionsRequest,
  stacksSignTransactionsRequestSchema,
} from './signTransactions/request';
import {
  type StacksTransferStxRequest,
  stacksTransferStxRequestSchema,
} from './transferStx/request';

export type StacksRequests = ExactObject<
  (typeof stacksMethods)[keyof typeof stacksMethods],
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

// Stacks response imports
import {
  type StacksCallContractSuccessResponse,
  stacksCallContractSuccessResponseSchema,
} from './callContract/response';
import {
  type StacksDeployContractSuccessResponse,
  stacksDeployContractSuccessResponseSchema,
} from './deployContract/response';
import {
  type StacksGetAccountsSuccessResponse,
  stacksGetAccountsSuccessResponseSchema,
} from './getAccounts/response';
import {
  type StacksGetAddressesSuccessResponse,
  stacksGetAddressesSuccessResponseSchema,
} from './getAddresses/response';
import {
  type StacksGetAddressesV2SuccessResponse,
  stacksGetAddressesV2SuccessResponseSchema,
} from './getAddressesV2/response';
import {
  type StacksSignMessageSuccessResponse,
  stacksSignMessageSuccessResponseSchema,
} from './signMessage/response';
import {
  type StacksSignStructuredMessageSuccessResponse,
  stacksSignStructuredMessageSuccessResponseSchema,
} from './signStructuredMessage/response';
import {
  type StacksSignTransactionSuccessResponse,
  stacksSignTransactionSuccessResponseSchema,
} from './signTransaction/response';
import {
  type StacksSignTransactionsSuccessResponse,
  stacksSignTransactionsSuccessResponseSchema,
} from './signTransactions/response';
import {
  type StacksTransferStxSuccessResponse,
  stacksTransferStxSuccessResponseSchema,
} from './transferStx/response';

export type StacksSuccessResponses = ExactObject<
  (typeof stacksMethods)[keyof typeof stacksMethods],
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
