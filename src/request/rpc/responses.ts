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
  type BitcoinGetAccountsSuccessResponse,
  bitcoinGetAccountsSuccessResponseSchema,
} from './methodSchemas/bitcoin/getAccounts/response';
import {
  type BitcoinGetAccountsV2SuccessResponse,
  bitcoinGetAccountsV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/getAccountsV2/response';
import {
  type BitcoinGetAddressesSuccessResponse,
  bitcoinGetAddressesSuccessResponseSchema,
} from './methodSchemas/bitcoin/getAddresses/response';
import {
  type BitcoinGetAddressesV2SuccessResponse,
  bitcoinGetAddressesV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/getAddressesV2/response';
import {
  type BitcoinGetBalanceSuccessResponse,
  bitcoinGetBalanceSuccessResponseSchema,
} from './methodSchemas/bitcoin/getBalance/response';
import {
  type BitcoinGetBalanceV2SuccessResponse,
  bitcoinGetBalanceV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/getBalanceV2/response';
import {
  type BitcoinGetInfoSuccessResponse,
  bitcoinGetInfoSuccessResponseSchema,
} from './methodSchemas/bitcoin/getInfo/response';
import {
  type BitcoinGetInfoV2SuccessResponse,
  bitcoinGetInfoV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/getInfoV2/response';
import {
  type BitcoinSendTransferSuccessResponse,
  bitcoinSendTransferSuccessResponseSchema,
} from './methodSchemas/bitcoin/sendTransfer/response';
import {
  type BitcoinSendTransferV2SuccessResponse,
  bitcoinSendTransferV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/sendTransferV2/response';
import {
  type BitcoinSignMessageSuccessResponse,
  bitcoinSignMessageSuccessResponseSchema,
} from './methodSchemas/bitcoin/signMessage/response';
import {
  type BitcoinSignMessageV2SuccessResponse,
  bitcoinSignMessageV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/signMessageV2/response';
import {
  type BitcoinSignMultipleMessagesSuccessResponse,
  bitcoinSignMultipleMessagesSuccessResponseSchema,
} from './methodSchemas/bitcoin/signMultipleMessages/response';
import {
  type BitcoinSignMultipleMessagesV2SuccessResponse,
  bitcoinSignMultipleMessagesV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/signMultipleMessagesV2/response';
import {
  type BitcoinSignPsbtSuccessResponse,
  bitcoinSignPsbtSuccessResponseSchema,
} from './methodSchemas/bitcoin/signPsbt/response';
import {
  type BitcoinSignPsbtV2SuccessResponse,
  bitcoinSignPsbtV2SuccessResponseSchema,
} from './methodSchemas/bitcoin/signPsbtV2/response';

// Stacks imports
import {
  type StacksCallContractSuccessResponse,
  stacksCallContractSuccessResponseSchema,
} from './methodSchemas/stacks/callContract/response';
import {
  type StacksDeployContractSuccessResponse,
  stacksDeployContractSuccessResponseSchema,
} from './methodSchemas/stacks/deployContract/response';
import {
  type StacksGetAccountsSuccessResponse,
  stacksGetAccountsSuccessResponseSchema,
} from './methodSchemas/stacks/getAccounts/response';
import {
  type StacksGetAddressesSuccessResponse,
  stacksGetAddressesSuccessResponseSchema,
} from './methodSchemas/stacks/getAddresses/response';
import {
  type StacksGetAddressesV2SuccessResponse,
  stacksGetAddressesV2SuccessResponseSchema,
} from './methodSchemas/stacks/getAddressesV2/response';
import {
  type StacksSignMessageSuccessResponse,
  stacksSignMessageSuccessResponseSchema,
} from './methodSchemas/stacks/signMessage/response';
import {
  type StacksSignStructuredMessageSuccessResponse,
  stacksSignStructuredMessageSuccessResponseSchema,
} from './methodSchemas/stacks/signStructuredMessage/response';
import {
  type StacksSignTransactionSuccessResponse,
  stacksSignTransactionSuccessResponseSchema,
} from './methodSchemas/stacks/signTransaction/response';
import {
  type StacksSignTransactionsSuccessResponse,
  stacksSignTransactionsSuccessResponseSchema,
} from './methodSchemas/stacks/signTransactions/response';
import {
  type StacksTransferStxSuccessResponse,
  stacksTransferStxSuccessResponseSchema,
} from './methodSchemas/stacks/transferStx/response';

// Spark imports
import {
  type SparkGetAddressesSuccessResponse,
  sparkGetAddressesSuccessResponseSchema,
} from './methodSchemas/spark/getAddresses/response';
import {
  type SparkGetAddressesV2SuccessResponse,
  sparkGetAddressesV2SuccessResponseSchema,
} from './methodSchemas/spark/getAddressesV2/response';
import {
  type SparkGetBalanceSuccessResponse,
  sparkGetBalanceSuccessResponseSchema,
} from './methodSchemas/spark/getBalance/response';
import {
  type SparkTransferSuccessResponse,
  sparkTransferSuccessResponseSchema,
} from './methodSchemas/spark/transfer/response';
import {
  type SparkTransferTokenSuccessResponse,
  sparkTransferTokenSuccessResponseSchema,
} from './methodSchemas/spark/transferToken/response';
import {
  type SparkSignMessageSuccessResponse,
  sparkSignMessageSuccessResponseSchema,
} from './methodSchemas/spark/signMessage/response';
import {
  type SparkFlashnetGetJwtSuccessResponse,
  sparkFlashnetGetJwtSuccessResponseSchema,
} from './methodSchemas/spark/flashnetGetJwt/response';
import {
  type SparkFlashnetSignIntentSuccessResponse,
  sparkFlashnetSignIntentSuccessResponseSchema,
} from './methodSchemas/spark/flashnetSignIntent/response';
import {
  type SparkFlashnetSignStructuredMessageSuccessResponse,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
} from './methodSchemas/spark/flashnetSignStructuredMessage/response';
import {
  type SparkFlashnetExecuteSwapSuccessResponse,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
} from './methodSchemas/spark/flashnetExecuteSwap/response';
import {
  type SparkFlashnetExecuteRouteSwapSuccessResponse,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
} from './methodSchemas/spark/flashnetExecuteRouteSwap/response';
import {
  type SparkFlashnetClawbackFundsSuccessResponse,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
} from './methodSchemas/spark/flashnetClawbackFunds/response';
import {
  type SparkGetClawbackEligibleTransfersSuccessResponse,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
} from './methodSchemas/spark/getClawbackEligibleTransfers/response';

// Runes imports
import {
  type RunesEstimateEtchSuccessResponse,
  runesEstimateEtchSuccessResponseSchema,
} from './methodSchemas/runes/estimateEtch/response';
import {
  type RunesEstimateMintSuccessResponse,
  runesEstimateMintSuccessResponseSchema,
} from './methodSchemas/runes/estimateMint/response';
import {
  type RunesEstimateRbfOrderSuccessResponse,
  runesEstimateRbfOrderSuccessResponseSchema,
} from './methodSchemas/runes/estimateRbfOrder/response';
import {
  type RunesEtchSuccessResponse,
  runesEtchSuccessResponseSchema,
} from './methodSchemas/runes/etch/response';
import {
  type RunesGetBalanceSuccessResponse,
  runesGetBalanceSuccessResponseSchema,
} from './methodSchemas/runes/getBalance/response';
import {
  type RunesGetOrderSuccessResponse,
  runesGetOrderSuccessResponseSchema,
} from './methodSchemas/runes/getOrder/response';
import {
  type RunesMintSuccessResponse,
  runesMintSuccessResponseSchema,
} from './methodSchemas/runes/mint/response';
import {
  type RunesRbfOrderSuccessResponse,
  runesRbfOrderSuccessResponseSchema,
} from './methodSchemas/runes/rbfOrder/response';
import {
  type RunesTransferSuccessResponse,
  runesTransferSuccessResponseSchema,
} from './methodSchemas/runes/transfer/response';

// Ordinals imports
import {
  type OrdinalsGetInscriptionsSuccessResponse,
  ordinalsGetInscriptionsSuccessResponseSchema,
} from './methodSchemas/ordinals/getInscriptions/response';
import {
  type OrdinalsSendInscriptionsSuccessResponse,
  ordinalsSendInscriptionsSuccessResponseSchema,
} from './methodSchemas/ordinals/sendInscriptions/response';

// Wallet imports
import {
  type WalletAddNetworkSuccessResponse,
  walletAddNetworkSuccessResponseSchema,
} from './methodSchemas/wallet/addNetwork/response';
import {
  type WalletAddNetworkV2SuccessResponse,
  walletAddNetworkV2SuccessResponseSchema,
} from './methodSchemas/wallet/addNetworkV2/response';
import {
  type WalletChangeNetworkByIdSuccessResponse,
  walletChangeNetworkByIdSuccessResponseSchema,
} from './methodSchemas/wallet/changeNetworkById/response';
import {
  type WalletChangeNetworkSuccessResponse,
  walletChangeNetworkSuccessResponseSchema,
} from './methodSchemas/wallet/changeNetwork/response';
import {
  type WalletConnectSuccessResponse,
  walletConnectSuccessResponseSchema,
} from './methodSchemas/wallet/connect/response';
import {
  type WalletConnectV2SuccessResponse,
  walletConnectV2SuccessResponseSchema,
} from './methodSchemas/wallet/connectV2/response';
import {
  type WalletDisconnectSuccessResponse,
  walletDisconnectSuccessResponseSchema,
} from './methodSchemas/wallet/disconnect/response';
import {
  type WalletGetAccountSuccessResponse,
  walletGetAccountSuccessResponseSchema,
} from './methodSchemas/wallet/getAccount/response';
import {
  type WalletGetAccountV2SuccessResponse,
  walletGetAccountV2SuccessResponseSchema,
} from './methodSchemas/wallet/getAccountV2/response';
import {
  type WalletGetCurrentPermissionsSuccessResponse,
  walletGetCurrentPermissionsSuccessResponseSchema,
} from './methodSchemas/wallet/getCurrentPermissions/response';
import {
  type WalletGetNetworkSuccessResponse,
  walletGetNetworkSuccessResponseSchema,
} from './methodSchemas/wallet/getNetwork/response';
import {
  type WalletGetNetworksSuccessResponse,
  walletGetNetworksSuccessResponseSchema,
} from './methodSchemas/wallet/getNetworks/response';
import {
  type WalletGetWalletTypeSuccessResponse,
  walletGetWalletTypeSuccessResponseSchema,
} from './methodSchemas/wallet/getWalletType/response';
import {
  type WalletOpenBridgeSuccessResponse,
  walletOpenBridgeSuccessResponseSchema,
} from './methodSchemas/wallet/openBridge/response';
import {
  type WalletOpenBuySuccessResponse,
  walletOpenBuySuccessResponseSchema,
} from './methodSchemas/wallet/openBuy/response';
import {
  type WalletOpenReceiveSuccessResponse,
  walletOpenReceiveSuccessResponseSchema,
} from './methodSchemas/wallet/openReceive/response';
import {
  type WalletRenouncePermissionsSuccessResponse,
  walletRenouncePermissionsSuccessResponseSchema,
} from './methodSchemas/wallet/renouncePermissions/response';
import {
  type WalletRequestPermissionsSuccessResponse,
  walletRequestPermissionsSuccessResponseSchema,
} from './methodSchemas/wallet/requestPermissions/response';

export type RpcSuccessResponses = ExactObject<
  Method,
  {
    // Bitcoin methods
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
    // Stacks methods
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
    // Spark methods
    [sparkMethods.spark_getAddresses]: SparkGetAddressesSuccessResponse;
    [sparkMethods.spark_getAddressesV2]: SparkGetAddressesV2SuccessResponse;
    [sparkMethods.spark_getBalance]: SparkGetBalanceSuccessResponse;
    [sparkMethods.spark_transfer]: SparkTransferSuccessResponse;
    [sparkMethods.spark_transferToken]: SparkTransferTokenSuccessResponse;
    [sparkMethods.spark_signMessage]: SparkSignMessageSuccessResponse;
    [sparkMethods.spark_flashnet_getJwt]: SparkFlashnetGetJwtSuccessResponse;
    [sparkMethods.spark_flashnet_signIntent]: SparkFlashnetSignIntentSuccessResponse;
    [sparkMethods.spark_flashnet_signStructuredMessage]: SparkFlashnetSignStructuredMessageSuccessResponse;
    [sparkMethods.spark_flashnet_executeSwap]: SparkFlashnetExecuteSwapSuccessResponse;
    [sparkMethods.spark_flashnet_executeRouteSwap]: SparkFlashnetExecuteRouteSwapSuccessResponse;
    [sparkMethods.spark_flashnet_clawbackFunds]: SparkFlashnetClawbackFundsSuccessResponse;
    [sparkMethods.spark_getClawbackEligibleTransfers]: SparkGetClawbackEligibleTransfersSuccessResponse;
    // Runes methods
    [runesMethods.runes_estimateEtch]: RunesEstimateEtchSuccessResponse;
    [runesMethods.runes_estimateMint]: RunesEstimateMintSuccessResponse;
    [runesMethods.runes_estimateRbfOrder]: RunesEstimateRbfOrderSuccessResponse;
    [runesMethods.runes_etch]: RunesEtchSuccessResponse;
    [runesMethods.runes_getBalance]: RunesGetBalanceSuccessResponse;
    [runesMethods.runes_getOrder]: RunesGetOrderSuccessResponse;
    [runesMethods.runes_mint]: RunesMintSuccessResponse;
    [runesMethods.runes_rbfOrder]: RunesRbfOrderSuccessResponse;
    [runesMethods.runes_transfer]: RunesTransferSuccessResponse;
    // Ordinals methods
    [ordinalsMethods.ord_getInscriptions]: OrdinalsGetInscriptionsSuccessResponse;
    [ordinalsMethods.ord_sendInscriptions]: OrdinalsSendInscriptionsSuccessResponse;
    // Wallet methods
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

export type RpcSuccessResponseResult<M extends Method> = RpcSuccessResponses[M]['result'];

export const rpcSuccessResponseSchema = v.union([
  // Bitcoin methods
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
  // Stacks methods
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
  // Spark methods
  sparkGetAddressesSuccessResponseSchema,
  sparkGetAddressesV2SuccessResponseSchema,
  sparkGetBalanceSuccessResponseSchema,
  sparkTransferSuccessResponseSchema,
  sparkTransferTokenSuccessResponseSchema,
  sparkSignMessageSuccessResponseSchema,
  sparkFlashnetGetJwtSuccessResponseSchema,
  sparkFlashnetSignIntentSuccessResponseSchema,
  sparkFlashnetSignStructuredMessageSuccessResponseSchema,
  sparkFlashnetExecuteSwapSuccessResponseSchema,
  sparkFlashnetExecuteRouteSwapSuccessResponseSchema,
  sparkFlashnetClawbackFundsSuccessResponseSchema,
  sparkGetClawbackEligibleTransfersSuccessResponseSchema,
  // Runes methods
  runesEstimateEtchSuccessResponseSchema,
  runesEstimateMintSuccessResponseSchema,
  runesEstimateRbfOrderSuccessResponseSchema,
  runesEtchSuccessResponseSchema,
  runesGetBalanceSuccessResponseSchema,
  runesGetOrderSuccessResponseSchema,
  runesMintSuccessResponseSchema,
  runesRbfOrderSuccessResponseSchema,
  runesTransferSuccessResponseSchema,
  // Ordinals methods
  ordinalsGetInscriptionsSuccessResponseSchema,
  ordinalsSendInscriptionsSuccessResponseSchema,
  // Wallet methods
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
]);

export type RpcSuccessResponse = v.InferOutput<typeof rpcSuccessResponseSchema>;
