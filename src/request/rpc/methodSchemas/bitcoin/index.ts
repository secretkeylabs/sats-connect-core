import { bitcoinMethods } from '../../../methods';
import type { ExactObject } from '../../../exact';

// Bitcoin request imports
import {
  type BitcoinGetAccountsRequest,
  bitcoinGetAccountsRequestSchema,
} from './getAccounts/request';
import {
  type BitcoinGetAccountsV2Request,
  bitcoinGetAccountsV2RequestSchema,
} from './getAccountsV2/request';
import {
  type BitcoinGetAddressesRequest,
  bitcoinGetAddressesRequestSchema,
} from './getAddresses/request';
import {
  type BitcoinGetAddressesV2Request,
  bitcoinGetAddressesV2RequestSchema,
} from './getAddressesV2/request';
import {
  type BitcoinGetBalanceRequest,
  bitcoinGetBalanceRequestSchema,
} from './getBalance/request';
import {
  type BitcoinGetBalanceV2Request,
  bitcoinGetBalanceV2RequestSchema,
} from './getBalanceV2/request';
import { type BitcoinGetInfoRequest, bitcoinGetInfoRequestSchema } from './getInfo/request';
import { type BitcoinGetInfoV2Request, bitcoinGetInfoV2RequestSchema } from './getInfoV2/request';
import {
  type BitcoinSendTransferRequest,
  bitcoinSendTransferRequestSchema,
} from './sendTransfer/request';
import {
  type BitcoinSendTransferV2Request,
  bitcoinSendTransferV2RequestSchema,
} from './sendTransferV2/request';
import {
  type BitcoinSignMessageRequest,
  bitcoinSignMessageRequestSchema,
} from './signMessage/request';
import {
  type BitcoinSignMessageV2Request,
  bitcoinSignMessageV2RequestSchema,
} from './signMessageV2/request';
import {
  type BitcoinSignMultipleMessagesRequest,
  bitcoinSignMultipleMessagesRequestSchema,
} from './signMultipleMessages/request';
import {
  type BitcoinSignMultipleMessagesV2Request,
  bitcoinSignMultipleMessagesV2RequestSchema,
} from './signMultipleMessagesV2/request';
import { type BitcoinSignPsbtRequest, bitcoinSignPsbtRequestSchema } from './signPsbt/request';
import {
  type BitcoinSignPsbtV2Request,
  bitcoinSignPsbtV2RequestSchema,
} from './signPsbtV2/request';

// Bitcoin response imports
import {
  type BitcoinGetAccountsSuccessResponse,
  bitcoinGetAccountsSuccessResponseSchema,
} from './getAccounts/response';
import {
  type BitcoinGetAccountsV2SuccessResponse,
  bitcoinGetAccountsV2SuccessResponseSchema,
} from './getAccountsV2/response';
import {
  type BitcoinGetAddressesSuccessResponse,
  bitcoinGetAddressesSuccessResponseSchema,
} from './getAddresses/response';
import {
  type BitcoinGetAddressesV2SuccessResponse,
  bitcoinGetAddressesV2SuccessResponseSchema,
} from './getAddressesV2/response';
import {
  type BitcoinGetBalanceSuccessResponse,
  bitcoinGetBalanceSuccessResponseSchema,
} from './getBalance/response';
import {
  type BitcoinGetBalanceV2SuccessResponse,
  bitcoinGetBalanceV2SuccessResponseSchema,
} from './getBalanceV2/response';
import {
  type BitcoinGetInfoSuccessResponse,
  bitcoinGetInfoSuccessResponseSchema,
} from './getInfo/response';
import {
  type BitcoinGetInfoV2SuccessResponse,
  bitcoinGetInfoV2SuccessResponseSchema,
} from './getInfoV2/response';
import {
  type BitcoinSendTransferSuccessResponse,
  bitcoinSendTransferSuccessResponseSchema,
} from './sendTransfer/response';
import {
  type BitcoinSendTransferV2SuccessResponse,
  bitcoinSendTransferV2SuccessResponseSchema,
} from './sendTransferV2/response';
import {
  type BitcoinSignMessageSuccessResponse,
  bitcoinSignMessageSuccessResponseSchema,
} from './signMessage/response';
import {
  type BitcoinSignMessageV2SuccessResponse,
  bitcoinSignMessageV2SuccessResponseSchema,
} from './signMessageV2/response';
import {
  type BitcoinSignMultipleMessagesSuccessResponse,
  bitcoinSignMultipleMessagesSuccessResponseSchema,
} from './signMultipleMessages/response';
import {
  type BitcoinSignMultipleMessagesV2SuccessResponse,
  bitcoinSignMultipleMessagesV2SuccessResponseSchema,
} from './signMultipleMessagesV2/response';
import {
  type BitcoinSignPsbtSuccessResponse,
  bitcoinSignPsbtSuccessResponseSchema,
} from './signPsbt/response';
import {
  type BitcoinSignPsbtV2SuccessResponse,
  bitcoinSignPsbtV2SuccessResponseSchema,
} from './signPsbtV2/response';

export type BitcoinRequests = ExactObject<
  (typeof bitcoinMethods)[keyof typeof bitcoinMethods],
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
  (typeof bitcoinMethods)[keyof typeof bitcoinMethods],
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
