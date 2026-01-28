import type { ExactObject } from 'src/request/exact';
import { BitcoinMethod, bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type BitcoinGetAccountsRequest,
  bitcoinGetAccountsRequestSchema,
  type BitcoinGetAccountsSuccessResponse,
  bitcoinGetAccountsSuccessResponseSchema,
} from './methods/getAccounts';
import {
  type BitcoinGetAccountsV2Request,
  bitcoinGetAccountsV2RequestSchema,
  type BitcoinGetAccountsV2SuccessResponse,
  bitcoinGetAccountsV2SuccessResponseSchema,
} from './methods/getAccountsV2';
import {
  type BitcoinGetAddressesRequest,
  bitcoinGetAddressesRequestSchema,
  type BitcoinGetAddressesSuccessResponse,
  bitcoinGetAddressesSuccessResponseSchema,
} from './methods/getAddresses';
import {
  type BitcoinGetAddressesV2Request,
  bitcoinGetAddressesV2RequestSchema,
  type BitcoinGetAddressesV2SuccessResponse,
  bitcoinGetAddressesV2SuccessResponseSchema,
} from './methods/getAddressesV2';
import {
  type BitcoinGetBalanceRequest,
  bitcoinGetBalanceRequestSchema,
  type BitcoinGetBalanceSuccessResponse,
  bitcoinGetBalanceSuccessResponseSchema,
} from './methods/getBalance';
import {
  type BitcoinGetBalanceV2Request,
  bitcoinGetBalanceV2RequestSchema,
  type BitcoinGetBalanceV2SuccessResponse,
  bitcoinGetBalanceV2SuccessResponseSchema,
} from './methods/getBalanceV2';
import {
  type BitcoinGetInfoRequest,
  bitcoinGetInfoRequestSchema,
  type BitcoinGetInfoSuccessResponse,
  bitcoinGetInfoSuccessResponseSchema,
} from './methods/getInfo';
import {
  type BitcoinGetInfoV2Request,
  bitcoinGetInfoV2RequestSchema,
  type BitcoinGetInfoV2SuccessResponse,
  bitcoinGetInfoV2SuccessResponseSchema,
} from './methods/getInfoV2';
import {
  type BitcoinSendTransferRequest,
  bitcoinSendTransferRequestSchema,
  type BitcoinSendTransferSuccessResponse,
  bitcoinSendTransferSuccessResponseSchema,
} from './methods/sendTransfer';
import {
  type BitcoinSendTransferV2Request,
  bitcoinSendTransferV2RequestSchema,
  type BitcoinSendTransferV2SuccessResponse,
  bitcoinSendTransferV2SuccessResponseSchema,
} from './methods/sendTransferV2';
import {
  type BitcoinSignMessageRequest,
  bitcoinSignMessageRequestSchema,
  type BitcoinSignMessageSuccessResponse,
  bitcoinSignMessageSuccessResponseSchema,
} from './methods/signMessage';
import {
  type BitcoinSignMessageV2Request,
  bitcoinSignMessageV2RequestSchema,
  type BitcoinSignMessageV2SuccessResponse,
  bitcoinSignMessageV2SuccessResponseSchema,
} from './methods/signMessageV2';
import {
  type BitcoinSignMultipleMessagesRequest,
  bitcoinSignMultipleMessagesRequestSchema,
  type BitcoinSignMultipleMessagesSuccessResponse,
  bitcoinSignMultipleMessagesSuccessResponseSchema,
} from './methods/signMultipleMessages';
import {
  type BitcoinSignMultipleMessagesV2Request,
  bitcoinSignMultipleMessagesV2RequestSchema,
  type BitcoinSignMultipleMessagesV2SuccessResponse,
  bitcoinSignMultipleMessagesV2SuccessResponseSchema,
} from './methods/signMultipleMessagesV2';
import {
  type BitcoinSignPsbtRequest,
  bitcoinSignPsbtRequestSchema,
  type BitcoinSignPsbtSuccessResponse,
  bitcoinSignPsbtSuccessResponseSchema,
} from './methods/signPsbt';
import {
  type BitcoinSignPsbtV2Request,
  bitcoinSignPsbtV2RequestSchema,
  type BitcoinSignPsbtV2SuccessResponse,
  bitcoinSignPsbtV2SuccessResponseSchema,
} from './methods/signPsbtV2';

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
