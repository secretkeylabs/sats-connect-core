import type { ExactObject } from 'src/request/exact';
import { BitcoinMethod, bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type BitcoinGetAccountsRequest,
  bitcoinGetAccountsRequestSchema,
  type BitcoinGetAccountsSuccessResponse,
  bitcoinGetAccountsSuccessResponseSchema,
  type BitcoinGetAccountsV2Request,
  bitcoinGetAccountsV2RequestSchema,
  type BitcoinGetAccountsV2SuccessResponse,
  bitcoinGetAccountsV2SuccessResponseSchema,
  type BitcoinGetAddressesRequest,
  bitcoinGetAddressesRequestSchema,
  type BitcoinGetAddressesSuccessResponse,
  bitcoinGetAddressesSuccessResponseSchema,
  type BitcoinGetAddressesV2Request,
  bitcoinGetAddressesV2RequestSchema,
  type BitcoinGetAddressesV2SuccessResponse,
  bitcoinGetAddressesV2SuccessResponseSchema,
  type BitcoinGetBalanceRequest,
  bitcoinGetBalanceRequestSchema,
  type BitcoinGetBalanceSuccessResponse,
  bitcoinGetBalanceSuccessResponseSchema,
  type BitcoinGetBalanceV2Request,
  bitcoinGetBalanceV2RequestSchema,
  type BitcoinGetBalanceV2SuccessResponse,
  bitcoinGetBalanceV2SuccessResponseSchema,
  type BitcoinGetInfoRequest,
  bitcoinGetInfoRequestSchema,
  type BitcoinGetInfoSuccessResponse,
  bitcoinGetInfoSuccessResponseSchema,
  type BitcoinGetInfoV2Request,
  bitcoinGetInfoV2RequestSchema,
  type BitcoinGetInfoV2SuccessResponse,
  bitcoinGetInfoV2SuccessResponseSchema,
  type BitcoinSendTransferRequest,
  bitcoinSendTransferRequestSchema,
  type BitcoinSendTransferSuccessResponse,
  bitcoinSendTransferSuccessResponseSchema,
  type BitcoinSendTransferV2Request,
  bitcoinSendTransferV2RequestSchema,
  type BitcoinSendTransferV2SuccessResponse,
  bitcoinSendTransferV2SuccessResponseSchema,
  type BitcoinSignMessageRequest,
  bitcoinSignMessageRequestSchema,
  type BitcoinSignMessageSuccessResponse,
  bitcoinSignMessageSuccessResponseSchema,
  type BitcoinSignMessageV2Request,
  bitcoinSignMessageV2RequestSchema,
  type BitcoinSignMessageV2SuccessResponse,
  bitcoinSignMessageV2SuccessResponseSchema,
  type BitcoinSignMultipleMessagesRequest,
  bitcoinSignMultipleMessagesRequestSchema,
  type BitcoinSignMultipleMessagesSuccessResponse,
  bitcoinSignMultipleMessagesSuccessResponseSchema,
  type BitcoinSignMultipleMessagesV2Request,
  bitcoinSignMultipleMessagesV2RequestSchema,
  type BitcoinSignMultipleMessagesV2SuccessResponse,
  bitcoinSignMultipleMessagesV2SuccessResponseSchema,
  type BitcoinSignPsbtRequest,
  bitcoinSignPsbtRequestSchema,
  type BitcoinSignPsbtSuccessResponse,
  bitcoinSignPsbtSuccessResponseSchema,
  type BitcoinSignPsbtV2Request,
  bitcoinSignPsbtV2RequestSchema,
  type BitcoinSignPsbtV2SuccessResponse,
  bitcoinSignPsbtV2SuccessResponseSchema,
} from './methods';

export type BitcoinRequests = ExactObject<
  BitcoinMethod,
  {
    [bitcoinMethods.getAccounts]: BitcoinGetAccountsRequest;
    [bitcoinMethods.bitcoin_getAccountsV2]: BitcoinGetAccountsV2Request;
    [bitcoinMethods.getAddresses]: BitcoinGetAddressesRequest;
    [bitcoinMethods.bitcoin_getAddressesV2]: BitcoinGetAddressesV2Request;
    [bitcoinMethods.getBalance]: BitcoinGetBalanceRequest;
    [bitcoinMethods.bitcoin_getBalanceV2]: BitcoinGetBalanceV2Request;
    [bitcoinMethods.getInfo]: BitcoinGetInfoRequest;
    [bitcoinMethods.bitcoin_getInfoV2]: BitcoinGetInfoV2Request;
    [bitcoinMethods.sendTransfer]: BitcoinSendTransferRequest;
    [bitcoinMethods.bitcoin_sendTransferV2]: BitcoinSendTransferV2Request;
    [bitcoinMethods.signMessage]: BitcoinSignMessageRequest;
    [bitcoinMethods.bitcoin_signMessageV2]: BitcoinSignMessageV2Request;
    [bitcoinMethods.signMultipleMessages]: BitcoinSignMultipleMessagesRequest;
    [bitcoinMethods.bitcoin_signMultipleMessagesV2]: BitcoinSignMultipleMessagesV2Request;
    [bitcoinMethods.signPsbt]: BitcoinSignPsbtRequest;
    [bitcoinMethods.bitcoin_signPsbtV2]: BitcoinSignPsbtV2Request;
  }
>;

export const bitcoinRequestSchema = v.variant('method', [
  bitcoinGetAccountsRequestSchema,
  bitcoinGetAccountsV2RequestSchema,
  bitcoinGetAddressesRequestSchema,
  bitcoinGetAddressesV2RequestSchema,
  bitcoinGetBalanceRequestSchema,
  bitcoinGetBalanceV2RequestSchema,
  bitcoinGetInfoRequestSchema,
  bitcoinGetInfoV2RequestSchema,
  bitcoinSendTransferRequestSchema,
  bitcoinSendTransferV2RequestSchema,
  bitcoinSignMessageRequestSchema,
  bitcoinSignMessageV2RequestSchema,
  bitcoinSignMultipleMessagesRequestSchema,
  bitcoinSignMultipleMessagesV2RequestSchema,
  bitcoinSignPsbtRequestSchema,
  bitcoinSignPsbtV2RequestSchema,
]);

export type BitcoinSuccessResponses = ExactObject<
  BitcoinMethod,
  {
    [bitcoinMethods.getAccounts]: BitcoinGetAccountsSuccessResponse;
    [bitcoinMethods.bitcoin_getAccountsV2]: BitcoinGetAccountsV2SuccessResponse;
    [bitcoinMethods.getAddresses]: BitcoinGetAddressesSuccessResponse;
    [bitcoinMethods.bitcoin_getAddressesV2]: BitcoinGetAddressesV2SuccessResponse;
    [bitcoinMethods.getBalance]: BitcoinGetBalanceSuccessResponse;
    [bitcoinMethods.bitcoin_getBalanceV2]: BitcoinGetBalanceV2SuccessResponse;
    [bitcoinMethods.getInfo]: BitcoinGetInfoSuccessResponse;
    [bitcoinMethods.bitcoin_getInfoV2]: BitcoinGetInfoV2SuccessResponse;
    [bitcoinMethods.sendTransfer]: BitcoinSendTransferSuccessResponse;
    [bitcoinMethods.bitcoin_sendTransferV2]: BitcoinSendTransferV2SuccessResponse;
    [bitcoinMethods.signMessage]: BitcoinSignMessageSuccessResponse;
    [bitcoinMethods.bitcoin_signMessageV2]: BitcoinSignMessageV2SuccessResponse;
    [bitcoinMethods.signMultipleMessages]: BitcoinSignMultipleMessagesSuccessResponse;
    [bitcoinMethods.bitcoin_signMultipleMessagesV2]: BitcoinSignMultipleMessagesV2SuccessResponse;
    [bitcoinMethods.signPsbt]: BitcoinSignPsbtSuccessResponse;
    [bitcoinMethods.bitcoin_signPsbtV2]: BitcoinSignPsbtV2SuccessResponse;
  }
>;

export const bitcoinSuccessResponseSchema = v.variant('~sats-connect-method', [
  bitcoinGetAccountsSuccessResponseSchema,
  bitcoinGetAccountsV2SuccessResponseSchema,
  bitcoinGetAddressesSuccessResponseSchema,
  bitcoinGetAddressesV2SuccessResponseSchema,
  bitcoinGetBalanceSuccessResponseSchema,
  bitcoinGetBalanceV2SuccessResponseSchema,
  bitcoinGetInfoSuccessResponseSchema,
  bitcoinGetInfoV2SuccessResponseSchema,
  bitcoinSendTransferSuccessResponseSchema,
  bitcoinSendTransferV2SuccessResponseSchema,
  bitcoinSignMessageSuccessResponseSchema,
  bitcoinSignMessageV2SuccessResponseSchema,
  bitcoinSignMultipleMessagesSuccessResponseSchema,
  bitcoinSignMultipleMessagesV2SuccessResponseSchema,
  bitcoinSignPsbtSuccessResponseSchema,
  bitcoinSignPsbtV2SuccessResponseSchema,
]);
