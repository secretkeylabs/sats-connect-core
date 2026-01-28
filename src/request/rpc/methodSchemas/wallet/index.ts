import { walletMethods } from '../../../methods';
import type { ExactObject } from '../../../exact';

// Wallet request imports
import { type WalletAddNetworkRequest, walletAddNetworkRequestSchema } from './addNetwork/request';
import {
  type WalletAddNetworkV2Request,
  walletAddNetworkV2RequestSchema,
} from './addNetworkV2/request';
import {
  type WalletChangeNetworkByIdRequest,
  walletChangeNetworkByIdRequestSchema,
} from './changeNetworkById/request';
import {
  type WalletChangeNetworkRequest,
  walletChangeNetworkRequestSchema,
} from './changeNetwork/request';
import { type WalletConnectRequest, walletConnectRequestSchema } from './connect/request';
import { type WalletConnectV2Request, walletConnectV2RequestSchema } from './connectV2/request';
import { type WalletDisconnectRequest, walletDisconnectRequestSchema } from './disconnect/request';
import { type WalletGetAccountRequest, walletGetAccountRequestSchema } from './getAccount/request';
import {
  type WalletGetAccountV2Request,
  walletGetAccountV2RequestSchema,
} from './getAccountV2/request';
import {
  type WalletGetCurrentPermissionsRequest,
  walletGetCurrentPermissionsRequestSchema,
} from './getCurrentPermissions/request';
import { type WalletGetNetworkRequest, walletGetNetworkRequestSchema } from './getNetwork/request';
import {
  type WalletGetNetworksRequest,
  walletGetNetworksRequestSchema,
} from './getNetworks/request';
import {
  type WalletGetWalletTypeRequest,
  walletGetWalletTypeRequestSchema,
} from './getWalletType/request';
import { type WalletOpenBridgeRequest, walletOpenBridgeRequestSchema } from './openBridge/request';
import { type WalletOpenBuyRequest, walletOpenBuyRequestSchema } from './openBuy/request';
import {
  type WalletOpenReceiveRequest,
  walletOpenReceiveRequestSchema,
} from './openReceive/request';
import {
  type WalletRenouncePermissionsRequest,
  walletRenouncePermissionsRequestSchema,
} from './renouncePermissions/request';
import {
  type WalletRequestPermissionsRequest,
  walletRequestPermissionsRequestSchema,
} from './requestPermissions/request';

export type WalletRequests = ExactObject<
  (typeof walletMethods)[keyof typeof walletMethods],
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

// Wallet response imports
import {
  type WalletAddNetworkSuccessResponse,
  walletAddNetworkSuccessResponseSchema,
} from './addNetwork/response';
import {
  type WalletAddNetworkV2SuccessResponse,
  walletAddNetworkV2SuccessResponseSchema,
} from './addNetworkV2/response';
import {
  type WalletChangeNetworkByIdSuccessResponse,
  walletChangeNetworkByIdSuccessResponseSchema,
} from './changeNetworkById/response';
import {
  type WalletChangeNetworkSuccessResponse,
  walletChangeNetworkSuccessResponseSchema,
} from './changeNetwork/response';
import {
  type WalletConnectSuccessResponse,
  walletConnectSuccessResponseSchema,
} from './connect/response';
import {
  type WalletConnectV2SuccessResponse,
  walletConnectV2SuccessResponseSchema,
} from './connectV2/response';
import {
  type WalletDisconnectSuccessResponse,
  walletDisconnectSuccessResponseSchema,
} from './disconnect/response';
import {
  type WalletGetAccountSuccessResponse,
  walletGetAccountSuccessResponseSchema,
} from './getAccount/response';
import {
  type WalletGetAccountV2SuccessResponse,
  walletGetAccountV2SuccessResponseSchema,
} from './getAccountV2/response';
import {
  type WalletGetCurrentPermissionsSuccessResponse,
  walletGetCurrentPermissionsSuccessResponseSchema,
} from './getCurrentPermissions/response';
import {
  type WalletGetNetworkSuccessResponse,
  walletGetNetworkSuccessResponseSchema,
} from './getNetwork/response';
import {
  type WalletGetNetworksSuccessResponse,
  walletGetNetworksSuccessResponseSchema,
} from './getNetworks/response';
import {
  type WalletGetWalletTypeSuccessResponse,
  walletGetWalletTypeSuccessResponseSchema,
} from './getWalletType/response';
import {
  type WalletOpenBridgeSuccessResponse,
  walletOpenBridgeSuccessResponseSchema,
} from './openBridge/response';
import {
  type WalletOpenBuySuccessResponse,
  walletOpenBuySuccessResponseSchema,
} from './openBuy/response';
import {
  type WalletOpenReceiveSuccessResponse,
  walletOpenReceiveSuccessResponseSchema,
} from './openReceive/response';
import {
  type WalletRenouncePermissionsSuccessResponse,
  walletRenouncePermissionsSuccessResponseSchema,
} from './renouncePermissions/response';
import {
  type WalletRequestPermissionsSuccessResponse,
  walletRequestPermissionsSuccessResponseSchema,
} from './requestPermissions/response';

export type WalletSuccessResponses = ExactObject<
  (typeof walletMethods)[keyof typeof walletMethods],
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
