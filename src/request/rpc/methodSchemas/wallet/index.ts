import type { ExactObject } from '../../../exact';
import { WalletMethod, walletMethods } from '../../../methods';
import {
  type WalletAddNetworkRequest,
  walletAddNetworkRequestSchema,
  type WalletAddNetworkSuccessResponse,
  walletAddNetworkSuccessResponseSchema,
} from './addNetwork';
import {
  type WalletAddNetworkV2Request,
  walletAddNetworkV2RequestSchema,
  type WalletAddNetworkV2SuccessResponse,
  walletAddNetworkV2SuccessResponseSchema,
} from './addNetworkV2';
import {
  type WalletChangeNetworkRequest,
  walletChangeNetworkRequestSchema,
  type WalletChangeNetworkSuccessResponse,
  walletChangeNetworkSuccessResponseSchema,
} from './changeNetwork';
import {
  type WalletChangeNetworkByIdRequest,
  walletChangeNetworkByIdRequestSchema,
  type WalletChangeNetworkByIdSuccessResponse,
  walletChangeNetworkByIdSuccessResponseSchema,
} from './changeNetworkById';
import {
  type WalletConnectRequest,
  walletConnectRequestSchema,
  type WalletConnectSuccessResponse,
  walletConnectSuccessResponseSchema,
} from './connect';
import {
  type WalletConnectV2Request,
  walletConnectV2RequestSchema,
  type WalletConnectV2SuccessResponse,
  walletConnectV2SuccessResponseSchema,
} from './connectV2';
import {
  type WalletDisconnectRequest,
  walletDisconnectRequestSchema,
  type WalletDisconnectSuccessResponse,
  walletDisconnectSuccessResponseSchema,
} from './disconnect';
import {
  type WalletGetAccountRequest,
  walletGetAccountRequestSchema,
  type WalletGetAccountSuccessResponse,
  walletGetAccountSuccessResponseSchema,
} from './getAccount';
import {
  type WalletGetAccountV2Request,
  walletGetAccountV2RequestSchema,
  type WalletGetAccountV2SuccessResponse,
  walletGetAccountV2SuccessResponseSchema,
} from './getAccountV2';
import {
  type WalletGetCurrentPermissionsRequest,
  walletGetCurrentPermissionsRequestSchema,
  type WalletGetCurrentPermissionsSuccessResponse,
  walletGetCurrentPermissionsSuccessResponseSchema,
} from './getCurrentPermissions';
import {
  type WalletGetNetworkRequest,
  walletGetNetworkRequestSchema,
  type WalletGetNetworkSuccessResponse,
  walletGetNetworkSuccessResponseSchema,
} from './getNetwork';
import {
  type WalletGetNetworksRequest,
  walletGetNetworksRequestSchema,
  type WalletGetNetworksSuccessResponse,
  walletGetNetworksSuccessResponseSchema,
} from './getNetworks';
import {
  type WalletGetWalletTypeRequest,
  walletGetWalletTypeRequestSchema,
  type WalletGetWalletTypeSuccessResponse,
  walletGetWalletTypeSuccessResponseSchema,
} from './getWalletType';
import {
  type WalletOpenBridgeRequest,
  walletOpenBridgeRequestSchema,
  type WalletOpenBridgeSuccessResponse,
  walletOpenBridgeSuccessResponseSchema,
} from './openBridge';
import {
  type WalletOpenBuyRequest,
  walletOpenBuyRequestSchema,
  type WalletOpenBuySuccessResponse,
  walletOpenBuySuccessResponseSchema,
} from './openBuy';
import {
  type WalletOpenReceiveRequest,
  walletOpenReceiveRequestSchema,
  type WalletOpenReceiveSuccessResponse,
  walletOpenReceiveSuccessResponseSchema,
} from './openReceive';
import {
  type WalletRenouncePermissionsRequest,
  walletRenouncePermissionsRequestSchema,
  type WalletRenouncePermissionsSuccessResponse,
  walletRenouncePermissionsSuccessResponseSchema,
} from './renouncePermissions';
import {
  type WalletRequestPermissionsRequest,
  walletRequestPermissionsRequestSchema,
  type WalletRequestPermissionsSuccessResponse,
  walletRequestPermissionsSuccessResponseSchema,
} from './requestPermissions';

export type WalletRequests = ExactObject<
  WalletMethod,
  {
    [walletMethods.wallet_addNetwork]: WalletAddNetworkRequest;
    [walletMethods.wallet_addNetworkV2]: WalletAddNetworkV2Request;
    [walletMethods.wallet_changeNetworkById]: WalletChangeNetworkByIdRequest;
    [walletMethods.wallet_changeNetwork]: WalletChangeNetworkRequest;
    [walletMethods.wallet_connect]: WalletConnectRequest;
    [walletMethods.wallet_connectV2]: WalletConnectV2Request;
    [walletMethods.wallet_disconnect]: WalletDisconnectRequest;
    [walletMethods.wallet_getAccount]: WalletGetAccountRequest;
    [walletMethods.wallet_getAccountV2]: WalletGetAccountV2Request;
    [walletMethods.wallet_getCurrentPermissions]: WalletGetCurrentPermissionsRequest;
    [walletMethods.wallet_getNetwork]: WalletGetNetworkRequest;
    [walletMethods.wallet_getNetworks]: WalletGetNetworksRequest;
    [walletMethods.wallet_getWalletType]: WalletGetWalletTypeRequest;
    [walletMethods.wallet_openBridge]: WalletOpenBridgeRequest;
    [walletMethods.wallet_openBuy]: WalletOpenBuyRequest;
    [walletMethods.wallet_openReceive]: WalletOpenReceiveRequest;
    [walletMethods.wallet_renouncePermissions]: WalletRenouncePermissionsRequest;
    [walletMethods.wallet_requestPermissions]: WalletRequestPermissionsRequest;
  }
>;

export const walletRequestSchemas = [
  walletAddNetworkRequestSchema,
  walletAddNetworkV2RequestSchema,
  walletChangeNetworkByIdRequestSchema,
  walletChangeNetworkRequestSchema,
  walletConnectRequestSchema,
  walletConnectV2RequestSchema,
  walletDisconnectRequestSchema,
  walletGetAccountRequestSchema,
  walletGetAccountV2RequestSchema,
  walletGetCurrentPermissionsRequestSchema,
  walletGetNetworkRequestSchema,
  walletGetNetworksRequestSchema,
  walletGetWalletTypeRequestSchema,
  walletOpenBridgeRequestSchema,
  walletOpenBuyRequestSchema,
  walletOpenReceiveRequestSchema,
  walletRenouncePermissionsRequestSchema,
  walletRequestPermissionsRequestSchema,
] as const;

export type WalletSuccessResponses = ExactObject<
  WalletMethod,
  {
    [walletMethods.wallet_addNetwork]: WalletAddNetworkSuccessResponse;
    [walletMethods.wallet_addNetworkV2]: WalletAddNetworkV2SuccessResponse;
    [walletMethods.wallet_changeNetworkById]: WalletChangeNetworkByIdSuccessResponse;
    [walletMethods.wallet_changeNetwork]: WalletChangeNetworkSuccessResponse;
    [walletMethods.wallet_connect]: WalletConnectSuccessResponse;
    [walletMethods.wallet_connectV2]: WalletConnectV2SuccessResponse;
    [walletMethods.wallet_disconnect]: WalletDisconnectSuccessResponse;
    [walletMethods.wallet_getAccount]: WalletGetAccountSuccessResponse;
    [walletMethods.wallet_getAccountV2]: WalletGetAccountV2SuccessResponse;
    [walletMethods.wallet_getCurrentPermissions]: WalletGetCurrentPermissionsSuccessResponse;
    [walletMethods.wallet_getNetwork]: WalletGetNetworkSuccessResponse;
    [walletMethods.wallet_getNetworks]: WalletGetNetworksSuccessResponse;
    [walletMethods.wallet_getWalletType]: WalletGetWalletTypeSuccessResponse;
    [walletMethods.wallet_openBridge]: WalletOpenBridgeSuccessResponse;
    [walletMethods.wallet_openBuy]: WalletOpenBuySuccessResponse;
    [walletMethods.wallet_openReceive]: WalletOpenReceiveSuccessResponse;
    [walletMethods.wallet_renouncePermissions]: WalletRenouncePermissionsSuccessResponse;
    [walletMethods.wallet_requestPermissions]: WalletRequestPermissionsSuccessResponse;
  }
>;

export const walletSuccessResponseSchemas = [
  walletAddNetworkSuccessResponseSchema,
  walletAddNetworkV2SuccessResponseSchema,
  walletChangeNetworkByIdSuccessResponseSchema,
  walletChangeNetworkSuccessResponseSchema,
  walletConnectSuccessResponseSchema,
  walletConnectV2SuccessResponseSchema,
  walletDisconnectSuccessResponseSchema,
  walletGetAccountSuccessResponseSchema,
  walletGetAccountV2SuccessResponseSchema,
  walletGetCurrentPermissionsSuccessResponseSchema,
  walletGetNetworkSuccessResponseSchema,
  walletGetNetworksSuccessResponseSchema,
  walletGetWalletTypeSuccessResponseSchema,
  walletOpenBridgeSuccessResponseSchema,
  walletOpenBuySuccessResponseSchema,
  walletOpenReceiveSuccessResponseSchema,
  walletRenouncePermissionsSuccessResponseSchema,
  walletRequestPermissionsSuccessResponseSchema,
] as const;
