import type * as BitcoinMethods from './bitcoinMethods';
import {
  GetInscriptions,
  SendInscriptions,
  getInscriptionsMethodName,
  sendInscriptionsMethodName,
} from './ordinalsMethods';
import type * as RunesMethods from './runesMethods';
import type * as SparkMethods from './sparkMethods';
import type * as StacksMethods from './stacksMethods';
import type * as WalletMethods from './walletMethods';

export type StacksRequests = {
  [StacksMethods.stacksCallContractMethodName]: StacksMethods.StacksCallContract;
  [StacksMethods.stacksDeployContractMethodName]: StacksMethods.StacksDeployContract;
  [StacksMethods.stacksGetAccountsMethodName]: StacksMethods.StacksGetAccounts;
  [StacksMethods.stacksGetAddressesMethodName]: StacksMethods.StacksGetAddresses;
  [StacksMethods.stacksGetAddressesV2MethodName]: StacksMethods.StacksGetAddressesV2;
  [StacksMethods.stacksSignMessageMethodName]: StacksMethods.StacksSignMessage;
  [StacksMethods.stacksSignStructuredMessageMethodName]: StacksMethods.StacksSignStructuredMessage;
  [StacksMethods.stacksSignTransactionMethodName]: StacksMethods.StacksSignTransaction;
  [StacksMethods.stacksSignTransactionsMethodName]: StacksMethods.StacksSignTransactions;
  [StacksMethods.stacksTransferStxMethodName]: StacksMethods.StacksTransferStx;
};

export type StacksRequestMethod = keyof StacksRequests;

export type SparkRequests = {
  [SparkMethods.sparkGetAddressesV2MethodName]: SparkMethods.SparkGetAddressesV2;
  [SparkMethods.sparkGetBalanceMethodName]: SparkMethods.SparkGetBalance;
  [SparkMethods.sparkTransferMethodName]: SparkMethods.SparkTransfer;
  [SparkMethods.sparkTransferTokenMethodName]: SparkMethods.SparkTransferToken;
  [SparkMethods.sparkSignMessageMethodName]: SparkMethods.SparkSignMessage;

  [SparkMethods.sparkFlashnetGetJwtMethodName]: SparkMethods.SparkFlashnetGetJwt;
  [SparkMethods.sparkFlashnetSignIntentMethodName]: SparkMethods.SparkFlashnetSignIntent;
  [SparkMethods.sparkFlashnetSignStructuredMessageMethodName]: SparkMethods.SparkFlashnetSignStructuredMessage;
  [SparkMethods.sparkFlashnetExecuteSwapMethodName]: SparkMethods.SparkFlashnetExecuteSwap;
  [SparkMethods.sparkFlashnetExecuteRouteSwapMethodName]: SparkMethods.SparkFlashnetExecuteRouteSwap;
  [SparkMethods.sparkFlashnetClawbackFundsMethodName]: SparkMethods.SparkFlashnetClawbackFunds;
  [SparkMethods.sparkGetClawbackEligibleTransfersMethodName]: SparkMethods.SparkGetClawbackEligibleTransfers;
};

export type SparkRequestMethod = keyof SparkRequests;

export type BitcoinRequests = {
  [BitcoinMethods.bitcoinGetAccountsV2MethodName]: BitcoinMethods.BitcoinGetAccountsV2;
  [BitcoinMethods.bitcoinGetAddressesV2MethodName]: BitcoinMethods.BitcoinGetAddressesV2;
  [BitcoinMethods.bitcoinGetBalanceV2MethodName]: BitcoinMethods.BitcoinGetBalanceV2;
  [BitcoinMethods.bitcoinGetInfoV2MethodName]: BitcoinMethods.BitcoinGetInfoV2;
  [BitcoinMethods.bitcoinSendTransferV2MethodName]: BitcoinMethods.BitcoinSendTransferV2;
  [BitcoinMethods.bitcoinSignMessageV2MethodName]: BitcoinMethods.BitcoinSignMessageV2;
  [BitcoinMethods.bitcoinSignMultipleMessagesV2MethodName]: BitcoinMethods.BitcoinSignMultipleMessagesV2;
  [BitcoinMethods.bitcoinSignPsbtV2MethodName]: BitcoinMethods.BitcoinSignPsbtV2;

  [BitcoinMethods.getAccountsMethodName]: BitcoinMethods.GetAccounts;
  [BitcoinMethods.getAddressesMethodName]: BitcoinMethods.GetAddresses;
  [BitcoinMethods.getBalanceMethodName]: BitcoinMethods.GetBalance;
  [BitcoinMethods.getInfoMethodName]: BitcoinMethods.GetInfo;
  [BitcoinMethods.sendTransferMethodName]: BitcoinMethods.SendTransfer;
  [BitcoinMethods.signMessageMethodName]: BitcoinMethods.SignMessage;
  [BitcoinMethods.signMultipleMessagesMethodName]: BitcoinMethods.SignMultipleMessages;
  [BitcoinMethods.signPsbtMethodName]: BitcoinMethods.SignPsbt;
};

export type BitcoinRequestMethod = keyof BitcoinRequests;

export type RunesRequests = {
  [RunesMethods.runesEstimateEtchMethodName]: RunesMethods.RunesEstimateEtch;
  [RunesMethods.runesEstimateMintMethodName]: RunesMethods.RunesEstimateMint;
  [RunesMethods.runesEstimateRbfOrderMethodName]: RunesMethods.RunesEstimateRbfOrder;
  [RunesMethods.runesEtchMethodName]: RunesMethods.RunesEtch;
  [RunesMethods.runesGetBalanceMethodName]: RunesMethods.RunesGetBalance;
  [RunesMethods.runesGetOrderMethodName]: RunesMethods.RunesGetOrder;
  [RunesMethods.runesMintMethodName]: RunesMethods.RunesMint;
  [RunesMethods.runesRbfOrderMethodName]: RunesMethods.RunesRbfOrder;
  [RunesMethods.runesTransferMethodName]: RunesMethods.RunesTransfer;
};

export type RunesRequestMethod = keyof RunesRequests;

export type OrdinalsRequests = {
  [getInscriptionsMethodName]: GetInscriptions;
  [sendInscriptionsMethodName]: SendInscriptions;
};

export type OrdinalsRequestMethod = keyof OrdinalsRequests;

export type WalletRequests = {
  [WalletMethods.addNetworkMethodName]: WalletMethods.AddNetwork;
  [WalletMethods.addNetworkV2MethodName]: WalletMethods.AddNetworkV2;
  [WalletMethods.changeNetworkByIdMethodName]: WalletMethods.ChangeNetworkById;
  [WalletMethods.changeNetworkMethodName]: WalletMethods.ChangeNetwork;
  [WalletMethods.connectMethodName]: WalletMethods.Connect;
  [WalletMethods.connectV2MethodName]: WalletMethods.ConnectV2;
  [WalletMethods.disconnectMethodName]: WalletMethods.Disconnect;
  [WalletMethods.getAccountMethodName]: WalletMethods.GetAccount;
  [WalletMethods.getAccountV2MethodName]: WalletMethods.GetAccountV2;
  [WalletMethods.getCurrentPermissionsMethodName]: WalletMethods.GetCurrentPermissions;
  [WalletMethods.getNetworkMethodName]: WalletMethods.GetNetwork;
  [WalletMethods.getNetworksMethodName]: WalletMethods.GetNetworks;
  [WalletMethods.getWalletTypeMethodName]: WalletMethods.GetWalletType;
  [WalletMethods.openBridgeMethodName]: WalletMethods.OpenBridge;
  [WalletMethods.openBuyMethodName]: WalletMethods.OpenBuy;
  [WalletMethods.openReceiveMethodName]: WalletMethods.OpenReceive;
  [WalletMethods.renouncePermissionsMethodName]: WalletMethods.RenouncePermissions;
  [WalletMethods.requestPermissionsMethodName]: WalletMethods.RequestPermissions;
};

export type Requests = BitcoinRequests &
  StacksRequests &
  SparkRequests &
  RunesRequests &
  WalletRequests &
  OrdinalsRequests;

export type Return<Method> = Method extends keyof Requests ? Requests[Method]['result'] : never;
export type Params<Method> = Method extends keyof Requests ? Requests[Method]['params'] : never;

export * from './bitcoinMethods';
export * from './common';
export * from './ordinalsMethods';
export * from './runesMethods';
export * from './sparkMethods';
export * from './stacksMethods';
export * from './walletMethods';
