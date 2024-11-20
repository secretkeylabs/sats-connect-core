import type * as BtcMethods from './btcMethods';
import { GetInscriptions, SendInscriptions } from './ordinalsMethods';
import type * as RunesMethods from './runesMethods';
import type * as StxMethods from './stxMethods';
import type * as WalletMethods from './walletMethods';

export interface StxRequests {
  stx_callContract: StxMethods.StxCallContract;
  stx_deployContract: StxMethods.StxDeployContract;
  stx_getAccounts: StxMethods.StxGetAccounts;
  stx_getAddresses: StxMethods.StxGetAddresses;
  stx_signMessage: StxMethods.StxSignMessage;
  stx_signStructuredMessage: StxMethods.StxSignStructuredMessage;
  stx_signTransaction: StxMethods.StxSignTransaction;
  stx_transferStx: StxMethods.StxTransferStx;
  stx_signTransactions: StxMethods.StxSignTransactions;
}

export type StxRequestMethod = keyof StxRequests;

export interface BtcRequests {
  getInfo: BtcMethods.GetInfo;
  getAddresses: BtcMethods.GetAddresses;
  getAccounts: BtcMethods.GetAccounts;
  getBalance: BtcMethods.GetBalance;
  signMessage: BtcMethods.SignMessage;
  sendTransfer: BtcMethods.SendTransfer;
  signPsbt: BtcMethods.SignPsbt;
}

export type BtcRequestMethod = keyof BtcRequests;

export interface RunesRequests {
  runes_estimateEtch: RunesMethods.RunesEstimateEtch;
  runes_estimateMint: RunesMethods.RunesEstimateMint;
  runes_estimateRbfOrder: RunesMethods.RunesEstimateRbfOrder;
  runes_etch: RunesMethods.RunesEtch;
  runes_getBalance: RunesMethods.RunesGetBalance;
  runes_getOrder: RunesMethods.RunesGetOrder;
  runes_mint: RunesMethods.RunesMint;
  runes_rbfOrder: RunesMethods.RunesRbfOrder;
  runes_transfer: RunesMethods.RunesTransfer;
}

export type RunesRequestMethod = keyof RunesRequests;

export interface OrdinalsRequests {
  ord_getInscriptions: GetInscriptions;
  ord_sendInscriptions: SendInscriptions;
}

export type OrdinalsRequestMethod = keyof OrdinalsRequests;

export interface WalletRequests {
  wallet_connect: WalletMethods.Connect;
  wallet_disconnect: WalletMethods.Disconnect;
  wallet_getAccount: WalletMethods.GetAccount;
  wallet_getCurrentPermissions: WalletMethods.GetCurrentPermissions;
  wallet_getWalletType: WalletMethods.GetWalletType;
  wallet_renouncePermissions: WalletMethods.RenouncePermissions;
  wallet_requestPermissions: WalletMethods.RequestPermissions;
}

export type Requests = BtcRequests &
  StxRequests &
  RunesRequests &
  WalletRequests &
  OrdinalsRequests;

export type Return<Method> = Method extends keyof Requests ? Requests[Method]['result'] : never;
export type Params<Method> = Method extends keyof Requests ? Requests[Method]['params'] : never;

export * from './stxMethods';
export * from './btcMethods';
export * from './walletMethods';
export * from './runesMethods';
export * from './ordinalsMethods';
export * from './common';
