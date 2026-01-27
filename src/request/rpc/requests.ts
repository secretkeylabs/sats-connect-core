import * as v from 'valibot';
import {
  bitcoinMethods,
  stacksMethods,
  sparkMethods,
  runesMethods,
  ordinalsMethods,
  walletMethods,
  type Method,
} from '../methods';
import type { ExactObject } from '../exact';

// Bitcoin imports
import {
  type BitcoinGetAccountsRequest,
  bitcoinGetAccountsRequestSchema,
} from './methodSchemas/bitcoin/getAccounts/request';
import {
  type BitcoinGetAccountsV2Request,
  bitcoinGetAccountsV2RequestSchema,
} from './methodSchemas/bitcoin/getAccountsV2/request';
import {
  type BitcoinGetAddressesRequest,
  bitcoinGetAddressesRequestSchema,
} from './methodSchemas/bitcoin/getAddresses/request';
import {
  type BitcoinGetAddressesV2Request,
  bitcoinGetAddressesV2RequestSchema,
} from './methodSchemas/bitcoin/getAddressesV2/request';
import {
  type BitcoinGetBalanceRequest,
  bitcoinGetBalanceRequestSchema,
} from './methodSchemas/bitcoin/getBalance/request';
import {
  type BitcoinGetBalanceV2Request,
  bitcoinGetBalanceV2RequestSchema,
} from './methodSchemas/bitcoin/getBalanceV2/request';
import {
  type BitcoinGetInfoRequest,
  bitcoinGetInfoRequestSchema,
} from './methodSchemas/bitcoin/getInfo/request';
import {
  type BitcoinGetInfoV2Request,
  bitcoinGetInfoV2RequestSchema,
} from './methodSchemas/bitcoin/getInfoV2/request';
import {
  type BitcoinSendTransferRequest,
  bitcoinSendTransferRequestSchema,
} from './methodSchemas/bitcoin/sendTransfer/request';
import {
  type BitcoinSendTransferV2Request,
  bitcoinSendTransferV2RequestSchema,
} from './methodSchemas/bitcoin/sendTransferV2/request';
import {
  type BitcoinSignMessageRequest,
  bitcoinSignMessageRequestSchema,
} from './methodSchemas/bitcoin/signMessage/request';
import {
  type BitcoinSignMessageV2Request,
  bitcoinSignMessageV2RequestSchema,
} from './methodSchemas/bitcoin/signMessageV2/request';
import {
  type BitcoinSignMultipleMessagesRequest,
  bitcoinSignMultipleMessagesRequestSchema,
} from './methodSchemas/bitcoin/signMultipleMessages/request';
import {
  type BitcoinSignMultipleMessagesV2Request,
  bitcoinSignMultipleMessagesV2RequestSchema,
} from './methodSchemas/bitcoin/signMultipleMessagesV2/request';
import {
  type BitcoinSignPsbtRequest,
  bitcoinSignPsbtRequestSchema,
} from './methodSchemas/bitcoin/signPsbt/request';
import {
  type BitcoinSignPsbtV2Request,
  bitcoinSignPsbtV2RequestSchema,
} from './methodSchemas/bitcoin/signPsbtV2/request';

// Stacks imports
import {
  type StacksCallContractRequest,
  stacksCallContractRequestSchema,
} from './methodSchemas/stacks/callContract/request';
import {
  type StacksDeployContractRequest,
  stacksDeployContractRequestSchema,
} from './methodSchemas/stacks/deployContract/request';
import {
  type StacksGetAccountsRequest,
  stacksGetAccountsRequestSchema,
} from './methodSchemas/stacks/getAccounts/request';
import {
  type StacksGetAddressesRequest,
  stacksGetAddressesRequestSchema,
} from './methodSchemas/stacks/getAddresses/request';
import {
  type StacksGetAddressesV2Request,
  stacksGetAddressesV2RequestSchema,
} from './methodSchemas/stacks/getAddressesV2/request';
import {
  type StacksSignMessageRequest,
  stacksSignMessageRequestSchema,
} from './methodSchemas/stacks/signMessage/request';
import {
  type StacksSignStructuredMessageRequest,
  stacksSignStructuredMessageRequestSchema,
} from './methodSchemas/stacks/signStructuredMessage/request';
import {
  type StacksSignTransactionRequest,
  stacksSignTransactionRequestSchema,
} from './methodSchemas/stacks/signTransaction/request';
import {
  type StacksSignTransactionsRequest,
  stacksSignTransactionsRequestSchema,
} from './methodSchemas/stacks/signTransactions/request';
import {
  type StacksTransferStxRequest,
  stacksTransferStxRequestSchema,
} from './methodSchemas/stacks/transferStx/request';

// Spark imports
import {
  type SparkGetAddressesRequest,
  sparkGetAddressesRequestSchema,
} from './methodSchemas/spark/getAddresses/request';
import {
  type SparkGetAddressesV2Request,
  sparkGetAddressesV2RequestSchema,
} from './methodSchemas/spark/getAddressesV2/request';
import {
  type SparkGetBalanceRequest,
  sparkGetBalanceRequestSchema,
} from './methodSchemas/spark/getBalance/request';
import {
  type SparkTransferRequest,
  sparkTransferRequestSchema,
} from './methodSchemas/spark/transfer/request';
import {
  type SparkTransferTokenRequest,
  sparkTransferTokenRequestSchema,
} from './methodSchemas/spark/transferToken/request';
import {
  type SparkSignMessageRequest,
  sparkSignMessageRequestSchema,
} from './methodSchemas/spark/signMessage/request';
import {
  type SparkFlashnetGetJwtRequest,
  sparkFlashnetGetJwtRequestSchema,
} from './methodSchemas/spark/flashnetGetJwt/request';
import {
  type SparkFlashnetSignIntentRequest,
  sparkFlashnetSignIntentRequestSchema,
} from './methodSchemas/spark/flashnetSignIntent/request';
import {
  type SparkFlashnetSignStructuredMessageRequest,
  sparkFlashnetSignStructuredMessageRequestSchema,
} from './methodSchemas/spark/flashnetSignStructuredMessage/request';
import {
  type SparkFlashnetExecuteSwapRequest,
  sparkFlashnetExecuteSwapRequestSchema,
} from './methodSchemas/spark/flashnetExecuteSwap/request';
import {
  type SparkFlashnetExecuteRouteSwapRequest,
  sparkFlashnetExecuteRouteSwapRequestSchema,
} from './methodSchemas/spark/flashnetExecuteRouteSwap/request';
import {
  type SparkFlashnetClawbackFundsRequest,
  sparkFlashnetClawbackFundsRequestSchema,
} from './methodSchemas/spark/flashnetClawbackFunds/request';
import {
  type SparkGetClawbackEligibleTransfersRequest,
  sparkGetClawbackEligibleTransfersRequestSchema,
} from './methodSchemas/spark/getClawbackEligibleTransfers/request';

// Runes imports
import {
  type RunesEstimateEtchRequest,
  runesEstimateEtchRequestSchema,
} from './methodSchemas/runes/estimateEtch/request';
import {
  type RunesEstimateMintRequest,
  runesEstimateMintRequestSchema,
} from './methodSchemas/runes/estimateMint/request';
import {
  type RunesEstimateRbfOrderRequest,
  runesEstimateRbfOrderRequestSchema,
} from './methodSchemas/runes/estimateRbfOrder/request';
import { type RunesEtchRequest, runesEtchRequestSchema } from './methodSchemas/runes/etch/request';
import {
  type RunesGetBalanceRequest,
  runesGetBalanceRequestSchema,
} from './methodSchemas/runes/getBalance/request';
import {
  type RunesGetOrderRequest,
  runesGetOrderRequestSchema,
} from './methodSchemas/runes/getOrder/request';
import { type RunesMintRequest, runesMintRequestSchema } from './methodSchemas/runes/mint/request';
import {
  type RunesRbfOrderRequest,
  runesRbfOrderRequestSchema,
} from './methodSchemas/runes/rbfOrder/request';
import {
  type RunesTransferRequest,
  runesTransferRequestSchema,
} from './methodSchemas/runes/transfer/request';

// Ordinals imports
import {
  type OrdinalsGetInscriptionsRequest,
  ordinalsGetInscriptionsRequestSchema,
} from './methodSchemas/ordinals/getInscriptions/request';
import {
  type OrdinalsSendInscriptionsRequest,
  ordinalsSendInscriptionsRequestSchema,
} from './methodSchemas/ordinals/sendInscriptions/request';

// Wallet imports
import {
  type WalletAddNetworkRequest,
  walletAddNetworkRequestSchema,
} from './methodSchemas/wallet/addNetwork/request';
import {
  type WalletAddNetworkV2Request,
  walletAddNetworkV2RequestSchema,
} from './methodSchemas/wallet/addNetworkV2/request';
import {
  type WalletChangeNetworkByIdRequest,
  walletChangeNetworkByIdRequestSchema,
} from './methodSchemas/wallet/changeNetworkById/request';
import {
  type WalletChangeNetworkRequest,
  walletChangeNetworkRequestSchema,
} from './methodSchemas/wallet/changeNetwork/request';
import {
  type WalletConnectRequest,
  walletConnectRequestSchema,
} from './methodSchemas/wallet/connect/request';
import {
  type WalletConnectV2Request,
  walletConnectV2RequestSchema,
} from './methodSchemas/wallet/connectV2/request';
import {
  type WalletDisconnectRequest,
  walletDisconnectRequestSchema,
} from './methodSchemas/wallet/disconnect/request';
import {
  type WalletGetAccountRequest,
  walletGetAccountRequestSchema,
} from './methodSchemas/wallet/getAccount/request';
import {
  type WalletGetAccountV2Request,
  walletGetAccountV2RequestSchema,
} from './methodSchemas/wallet/getAccountV2/request';
import {
  type WalletGetCurrentPermissionsRequest,
  walletGetCurrentPermissionsRequestSchema,
} from './methodSchemas/wallet/getCurrentPermissions/request';
import {
  type WalletGetNetworkRequest,
  walletGetNetworkRequestSchema,
} from './methodSchemas/wallet/getNetwork/request';
import {
  type WalletGetNetworksRequest,
  walletGetNetworksRequestSchema,
} from './methodSchemas/wallet/getNetworks/request';
import {
  type WalletGetWalletTypeRequest,
  walletGetWalletTypeRequestSchema,
} from './methodSchemas/wallet/getWalletType/request';
import {
  type WalletOpenBridgeRequest,
  walletOpenBridgeRequestSchema,
} from './methodSchemas/wallet/openBridge/request';
import {
  type WalletOpenBuyRequest,
  walletOpenBuyRequestSchema,
} from './methodSchemas/wallet/openBuy/request';
import {
  type WalletOpenReceiveRequest,
  walletOpenReceiveRequestSchema,
} from './methodSchemas/wallet/openReceive/request';
import {
  type WalletRenouncePermissionsRequest,
  walletRenouncePermissionsRequestSchema,
} from './methodSchemas/wallet/renouncePermissions/request';
import {
  type WalletRequestPermissionsRequest,
  walletRequestPermissionsRequestSchema,
} from './methodSchemas/wallet/requestPermissions/request';

export type RpcRequests = ExactObject<
  Method,
  {
    // Bitcoin methods
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
    // Stacks methods
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
    // Spark methods
    [sparkMethods.spark_getAddresses]: SparkGetAddressesRequest;
    [sparkMethods.spark_getAddressesV2]: SparkGetAddressesV2Request;
    [sparkMethods.spark_getBalance]: SparkGetBalanceRequest;
    [sparkMethods.spark_transfer]: SparkTransferRequest;
    [sparkMethods.spark_transferToken]: SparkTransferTokenRequest;
    [sparkMethods.spark_signMessage]: SparkSignMessageRequest;
    [sparkMethods.spark_flashnet_getJwt]: SparkFlashnetGetJwtRequest;
    [sparkMethods.spark_flashnet_signIntent]: SparkFlashnetSignIntentRequest;
    [sparkMethods.spark_flashnet_signStructuredMessage]: SparkFlashnetSignStructuredMessageRequest;
    [sparkMethods.spark_flashnet_executeSwap]: SparkFlashnetExecuteSwapRequest;
    [sparkMethods.spark_flashnet_executeRouteSwap]: SparkFlashnetExecuteRouteSwapRequest;
    [sparkMethods.spark_flashnet_clawbackFunds]: SparkFlashnetClawbackFundsRequest;
    [sparkMethods.spark_getClawbackEligibleTransfers]: SparkGetClawbackEligibleTransfersRequest;
    // Runes methods
    [runesMethods.runes_estimateEtch]: RunesEstimateEtchRequest;
    [runesMethods.runes_estimateMint]: RunesEstimateMintRequest;
    [runesMethods.runes_estimateRbfOrder]: RunesEstimateRbfOrderRequest;
    [runesMethods.runes_etch]: RunesEtchRequest;
    [runesMethods.runes_getBalance]: RunesGetBalanceRequest;
    [runesMethods.runes_getOrder]: RunesGetOrderRequest;
    [runesMethods.runes_mint]: RunesMintRequest;
    [runesMethods.runes_rbfOrder]: RunesRbfOrderRequest;
    [runesMethods.runes_transfer]: RunesTransferRequest;
    // Ordinals methods
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsRequest;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsRequest;
    // Wallet methods
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

export type RpcRequestParams<M extends Method> = RpcRequests[M]['params'];

export const rpcRequestSchema = v.variant('method', [
  // Bitcoin methods
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
  // Stacks methods
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
  // Spark methods
  sparkGetAddressesRequestSchema,
  sparkGetAddressesV2RequestSchema,
  sparkGetBalanceRequestSchema,
  sparkTransferRequestSchema,
  sparkTransferTokenRequestSchema,
  sparkSignMessageRequestSchema,
  sparkFlashnetGetJwtRequestSchema,
  sparkFlashnetSignIntentRequestSchema,
  sparkFlashnetSignStructuredMessageRequestSchema,
  sparkFlashnetExecuteSwapRequestSchema,
  sparkFlashnetExecuteRouteSwapRequestSchema,
  sparkFlashnetClawbackFundsRequestSchema,
  sparkGetClawbackEligibleTransfersRequestSchema,
  // Runes methods
  runesEstimateEtchRequestSchema,
  runesEstimateMintRequestSchema,
  runesEstimateRbfOrderRequestSchema,
  runesEtchRequestSchema,
  runesGetBalanceRequestSchema,
  runesGetOrderRequestSchema,
  runesMintRequestSchema,
  runesRbfOrderRequestSchema,
  runesTransferRequestSchema,
  // Ordinals methods
  ordinalsGetInscriptionsRequestSchema,
  ordinalsSendInscriptionsRequestSchema,
  // Wallet methods
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
]);

export type RpcRequest = v.InferOutput<typeof rpcRequestSchema>;
