import type { ExactObject } from 'src/request/exact';
import type { WalletMethod, walletMethods } from 'src/request/methods';
import * as v from 'valibot';
import {
  type WalletAddNetworkRequest,
  walletAddNetworkRequestSchema,
  type WalletAddNetworkSuccessResponse,
  walletAddNetworkSuccessResponseSchema,
  type WalletAddNetworkV2Request,
  walletAddNetworkV2RequestSchema,
  type WalletAddNetworkV2SuccessResponse,
  walletAddNetworkV2SuccessResponseSchema,
  type WalletChangeNetworkRequest,
  walletChangeNetworkRequestSchema,
  type WalletChangeNetworkSuccessResponse,
  walletChangeNetworkSuccessResponseSchema,
  type WalletConnectRequest,
  walletConnectRequestSchema,
  type WalletConnectSuccessResponse,
  walletConnectSuccessResponseSchema,
  type WalletConnectV2Request,
  walletConnectV2RequestSchema,
  type WalletConnectV2SuccessResponse,
  walletConnectV2SuccessResponseSchema,
  type WalletDisconnectRequest,
  walletDisconnectRequestSchema,
  type WalletDisconnectSuccessResponse,
  walletDisconnectSuccessResponseSchema,
  type WalletGetAccountRequest,
  walletGetAccountRequestSchema,
  type WalletGetAccountSuccessResponse,
  walletGetAccountSuccessResponseSchema,
  type WalletGetAccountV2Request,
  walletGetAccountV2RequestSchema,
  type WalletGetAccountV2SuccessResponse,
  walletGetAccountV2SuccessResponseSchema,
  type WalletGetCurrentPermissionsRequest,
  walletGetCurrentPermissionsRequestSchema,
  type WalletGetCurrentPermissionsSuccessResponse,
  walletGetCurrentPermissionsSuccessResponseSchema,
  type WalletGetNetworkRequest,
  walletGetNetworkRequestSchema,
  type WalletGetNetworksRequest,
  walletGetNetworksRequestSchema,
  type WalletGetNetworksSuccessResponse,
  walletGetNetworksSuccessResponseSchema,
  type WalletGetNetworkSuccessResponse,
  walletGetNetworkSuccessResponseSchema,
  type WalletGetWalletTypeRequest,
  walletGetWalletTypeRequestSchema,
  type WalletGetWalletTypeSuccessResponse,
  walletGetWalletTypeSuccessResponseSchema,
  type WalletOpenBridgeRequest,
  walletOpenBridgeRequestSchema,
  type WalletOpenBridgeSuccessResponse,
  walletOpenBridgeSuccessResponseSchema,
  type WalletOpenBuyRequest,
  walletOpenBuyRequestSchema,
  type WalletOpenBuySuccessResponse,
  walletOpenBuySuccessResponseSchema,
  type WalletOpenReceiveRequest,
  walletOpenReceiveRequestSchema,
  type WalletOpenReceiveSuccessResponse,
  walletOpenReceiveSuccessResponseSchema,
  type WalletOpenRequest,
  walletOpenRequestSchema,
  type WalletOpenSuccessResponse,
  walletOpenSuccessResponseSchema,
  type WalletRenouncePermissionsRequest,
  walletRenouncePermissionsRequestSchema,
  type WalletRenouncePermissionsSuccessResponse,
  walletRenouncePermissionsSuccessResponseSchema,
  type WalletRequestPermissionsRequest,
  walletRequestPermissionsRequestSchema,
  type WalletRequestPermissionsSuccessResponse,
  walletRequestPermissionsSuccessResponseSchema,
  type WalletSwitchNetworkRequest,
  walletSwitchNetworkRequestSchema,
  walletSwitchNetworkSuccessResponseSchema,
} from './methods';

export type WalletRequests = ExactObject<
  WalletMethod,
  {
    [walletMethods.wallet_addNetwork]: WalletAddNetworkRequest;
    [walletMethods.wallet_addNetworkV2]: WalletAddNetworkV2Request;
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
    [walletMethods.wallet_open]: WalletOpenRequest;
    [walletMethods.wallet_openBridge]: WalletOpenBridgeRequest;
    [walletMethods.wallet_openBuy]: WalletOpenBuyRequest;
    [walletMethods.wallet_openReceive]: WalletOpenReceiveRequest;
    [walletMethods.wallet_renouncePermissions]: WalletRenouncePermissionsRequest;
    [walletMethods.wallet_requestPermissions]: WalletRequestPermissionsRequest;
    [walletMethods.wallet_switchNetwork]: WalletSwitchNetworkRequest;
  }
>;

export const walletRequestSchema = v.variant('method', [
  walletAddNetworkRequestSchema,
  walletAddNetworkV2RequestSchema,
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
  walletOpenRequestSchema,
  walletOpenBridgeRequestSchema,
  walletOpenBuyRequestSchema,
  walletOpenReceiveRequestSchema,
  walletRenouncePermissionsRequestSchema,
  walletRequestPermissionsRequestSchema,
  walletSwitchNetworkRequestSchema,
]);

export type WalletSuccessResponses = ExactObject<
  WalletMethod,
  {
    [walletMethods.wallet_addNetwork]: WalletAddNetworkSuccessResponse;
    [walletMethods.wallet_addNetworkV2]: WalletAddNetworkV2SuccessResponse;
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
    [walletMethods.wallet_open]: WalletOpenSuccessResponse;
    [walletMethods.wallet_openBridge]: WalletOpenBridgeSuccessResponse;
    [walletMethods.wallet_openBuy]: WalletOpenBuySuccessResponse;
    [walletMethods.wallet_openReceive]: WalletOpenReceiveSuccessResponse;
    [walletMethods.wallet_renouncePermissions]: WalletRenouncePermissionsSuccessResponse;
    [walletMethods.wallet_requestPermissions]: WalletRequestPermissionsSuccessResponse;
    [walletMethods.wallet_switchNetwork]: WalletChangeNetworkSuccessResponse;
  }
>;

export const walletSuccessResponseSchema = v.variant('~sats-connect-method', [
  walletAddNetworkSuccessResponseSchema,
  walletAddNetworkV2SuccessResponseSchema,
  walletChangeNetworkSuccessResponseSchema,
  walletConnectSuccessResponseSchema,
  walletConnectV2SuccessResponseSchema,
  walletDisconnectSuccessResponseSchema,
  walletGetAccountSuccessResponseSchema,
  walletGetAccountV2SuccessResponseSchema,
  walletGetCurrentPermissionsSuccessResponseSchema,
  walletGetNetworksSuccessResponseSchema,
  walletGetNetworkSuccessResponseSchema,
  walletGetWalletTypeSuccessResponseSchema,
  walletOpenSuccessResponseSchema,
  walletOpenBridgeSuccessResponseSchema,
  walletOpenBuySuccessResponseSchema,
  walletOpenReceiveSuccessResponseSchema,
  walletRenouncePermissionsSuccessResponseSchema,
  walletRequestPermissionsSuccessResponseSchema,
  walletSwitchNetworkSuccessResponseSchema,
]);

export * from './methods';
export * from './shared';
