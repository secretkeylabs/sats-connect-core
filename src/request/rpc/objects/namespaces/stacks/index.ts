import type { ExactObject } from 'src/request/exact';
import { StacksMethod, stacksMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type StacksCallContractRequest,
  stacksCallContractRequestSchema,
  type StacksCallContractSuccessResponse,
  stacksCallContractSuccessResponseSchema,
} from './methods/callContract';
import {
  type StacksDeployContractRequest,
  stacksDeployContractRequestSchema,
  type StacksDeployContractSuccessResponse,
  stacksDeployContractSuccessResponseSchema,
} from './methods/deployContract';
import {
  type StacksGetAccountsRequest,
  stacksGetAccountsRequestSchema,
  type StacksGetAccountsSuccessResponse,
  stacksGetAccountsSuccessResponseSchema,
} from './methods/getAccounts';
import {
  type StacksGetAddressesRequest,
  stacksGetAddressesRequestSchema,
  type StacksGetAddressesSuccessResponse,
  stacksGetAddressesSuccessResponseSchema,
} from './methods/getAddresses';
import {
  type StacksGetAddressesV2Request,
  stacksGetAddressesV2RequestSchema,
  type StacksGetAddressesV2SuccessResponse,
  stacksGetAddressesV2SuccessResponseSchema,
} from './methods/getAddressesV2';
import {
  type StacksSignMessageRequest,
  stacksSignMessageRequestSchema,
  type StacksSignMessageSuccessResponse,
  stacksSignMessageSuccessResponseSchema,
} from './methods/signMessage';
import {
  type StacksSignStructuredMessageRequest,
  stacksSignStructuredMessageRequestSchema,
  type StacksSignStructuredMessageSuccessResponse,
  stacksSignStructuredMessageSuccessResponseSchema,
} from './methods/signStructuredMessage';
import {
  type StacksSignTransactionRequest,
  stacksSignTransactionRequestSchema,
  type StacksSignTransactionSuccessResponse,
  stacksSignTransactionSuccessResponseSchema,
} from './methods/signTransaction';
import {
  type StacksSignTransactionsRequest,
  stacksSignTransactionsRequestSchema,
  type StacksSignTransactionsSuccessResponse,
  stacksSignTransactionsSuccessResponseSchema,
} from './methods/signTransactions';
import {
  type StacksTransferStxRequest,
  stacksTransferStxRequestSchema,
  type StacksTransferStxSuccessResponse,
  stacksTransferStxSuccessResponseSchema,
} from './methods/transferStx';

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
