import type * as BtcMethods from './btcMethods';
import { GetInscriptions } from './ordinalsMethods';
import type * as RunesMethods from './runesMethods';
import type * as StxMethods from './stxMethods';
import { RequestPermissions, RenouncePermissions } from './walletMethods';

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
}

export type RunesRequestMethod = keyof RunesRequests;

export interface OrdinalsRequests {
  ord_getInscriptions: GetInscriptions;
}

export type OrdinalsRequestMethod = keyof OrdinalsRequests;

export interface WalletMethods {
  wallet_requestPermissions: RequestPermissions;
  wallet_renouncePermissions: RenouncePermissions;
}

export type Requests = BtcRequests & StxRequests & RunesRequests & WalletMethods & OrdinalsRequests;

export type Return<Method> = Method extends keyof Requests ? Requests[Method]['result'] : never;
export type Params<Method> = Method extends keyof Requests ? Requests[Method]['params'] : never;

export * from './stxMethods';
export * from './btcMethods';
export * from './walletMethods';
export * from './runesMethods';
export * from './ordinalsMethods';
