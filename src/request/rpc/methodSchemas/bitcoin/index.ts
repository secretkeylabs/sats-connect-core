import type { ExactObject } from '../../../exact';
import { BitcoinMethod, bitcoinMethods } from '../../../methods';
import {
  type BitcoinGetAccountsRequest,
  bitcoinGetAccountsRequestSchema,
  type BitcoinGetAccountsSuccessResponse,
  bitcoinGetAccountsSuccessResponseSchema,
} from './getAccounts';
import {
  type BitcoinGetAccountsV2Request,
  bitcoinGetAccountsV2RequestSchema,
  type BitcoinGetAccountsV2SuccessResponse,
  bitcoinGetAccountsV2SuccessResponseSchema,
} from './getAccountsV2';
import {
  type BitcoinGetAddressesRequest,
  bitcoinGetAddressesRequestSchema,
  type BitcoinGetAddressesSuccessResponse,
  bitcoinGetAddressesSuccessResponseSchema,
} from './getAddresses';
import {
  type BitcoinGetAddressesV2Request,
  bitcoinGetAddressesV2RequestSchema,
  type BitcoinGetAddressesV2SuccessResponse,
  bitcoinGetAddressesV2SuccessResponseSchema,
} from './getAddressesV2';
import {
  type BitcoinGetBalanceRequest,
  bitcoinGetBalanceRequestSchema,
  type BitcoinGetBalanceSuccessResponse,
  bitcoinGetBalanceSuccessResponseSchema,
} from './getBalance';
import {
  type BitcoinGetBalanceV2Request,
  bitcoinGetBalanceV2RequestSchema,
  type BitcoinGetBalanceV2SuccessResponse,
  bitcoinGetBalanceV2SuccessResponseSchema,
} from './getBalanceV2';
import {
  type BitcoinGetInfoRequest,
  bitcoinGetInfoRequestSchema,
  type BitcoinGetInfoSuccessResponse,
  bitcoinGetInfoSuccessResponseSchema,
} from './getInfo';
import {
  type BitcoinGetInfoV2Request,
  bitcoinGetInfoV2RequestSchema,
  type BitcoinGetInfoV2SuccessResponse,
  bitcoinGetInfoV2SuccessResponseSchema,
} from './getInfoV2';
import {
  type BitcoinSendTransferRequest,
  bitcoinSendTransferRequestSchema,
  type BitcoinSendTransferSuccessResponse,
  bitcoinSendTransferSuccessResponseSchema,
} from './sendTransfer';
import {
  type BitcoinSendTransferV2Request,
  bitcoinSendTransferV2RequestSchema,
  type BitcoinSendTransferV2SuccessResponse,
  bitcoinSendTransferV2SuccessResponseSchema,
} from './sendTransferV2';
import {
  type BitcoinSignMessageRequest,
  bitcoinSignMessageRequestSchema,
  type BitcoinSignMessageSuccessResponse,
  bitcoinSignMessageSuccessResponseSchema,
} from './signMessage';
import {
  type BitcoinSignMessageV2Request,
  bitcoinSignMessageV2RequestSchema,
  type BitcoinSignMessageV2SuccessResponse,
  bitcoinSignMessageV2SuccessResponseSchema,
} from './signMessageV2';
import {
  type BitcoinSignMultipleMessagesRequest,
  bitcoinSignMultipleMessagesRequestSchema,
  type BitcoinSignMultipleMessagesSuccessResponse,
  bitcoinSignMultipleMessagesSuccessResponseSchema,
} from './signMultipleMessages';
import {
  type BitcoinSignMultipleMessagesV2Request,
  bitcoinSignMultipleMessagesV2RequestSchema,
  type BitcoinSignMultipleMessagesV2SuccessResponse,
  bitcoinSignMultipleMessagesV2SuccessResponseSchema,
} from './signMultipleMessagesV2';
import {
  type BitcoinSignPsbtRequest,
  bitcoinSignPsbtRequestSchema,
  type BitcoinSignPsbtSuccessResponse,
  bitcoinSignPsbtSuccessResponseSchema,
} from './signPsbt';
import {
  type BitcoinSignPsbtV2Request,
  bitcoinSignPsbtV2RequestSchema,
  type BitcoinSignPsbtV2SuccessResponse,
  bitcoinSignPsbtV2SuccessResponseSchema,
} from './signPsbtV2';

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

export const bitcoinRequestSchemas = [
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
] as const;

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

export const bitcoinSuccessResponseSchemas = [
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
] as const;
