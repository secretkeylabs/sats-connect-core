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
  stx_signMessage: StxMethods.StxSignStxMessage;
  stx_signStructuredMessage: StxMethods.StxSignStructuredMessage;
  stx_signTransaction: StxMethods.StxSignTransaction;
  stx_transferStx: StxMethods.StxTransferStx;
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
  runes_estimateMint: RunesMethods.EstimateRunesMint;
  runes_mint: RunesMethods.MintRunes;
  runes_estimateEtch: RunesMethods.EstimateRunesEtch;
  runes_etch: RunesMethods.EtchRunes;
  runes_getOrder: RunesMethods.GetOrder;
  runes_estimateRbfOrder: RunesMethods.EstimateRbfOrder;
  runes_rbfOrder: RunesMethods.RbfOrder;
  runes_getBalance: RunesMethods.GetRunesBalance;
  runes_transfer: RunesMethods.TransferRunes;
}

export type RunesRequestMethod = keyof RunesRequests;

export interface OrdinalsRequests {
  ord_getInscriptions: GetInscriptions;
  ord_sendInscriptions: SendInscriptions;
}

export type OrdinalsRequestMethod = keyof OrdinalsRequests;

export interface WalletRequests {
  wallet_requestPermissions: WalletMethods.RequestPermissions;
  wallet_renouncePermissions: WalletMethods.RenouncePermissions;
  wallet_getWalletType: WalletMethods.GetWalletType;
  wallet_getPermissions: WalletMethods.GetPermissions;
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
