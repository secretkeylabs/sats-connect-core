import {
  GetAccounts,
  GetAddresses,
  GetBalance,
  GetInfo,
  SendTransfer,
  SignMessage,
  SignPsbt,
} from './btcMethods';
import {
  EstimateRbfOrder,
  EstimateRunesEtch,
  EstimateRunesMint,
  EtchRunes,
  GetOrder,
  GetRunesBalance,
  MintRunes,
  RbfOrder,
} from './runesMethods';
import {
  StxCallContract,
  StxDeployContract,
  StxGetAccounts,
  StxGetAddresses,
  StxSignStructuredMessage,
  StxSignStxMessage,
  StxSignTransaction,
  StxTransferStx,
} from './stxMethods';
import { RequestPermissions, RenouncePermissions } from './walletMethods';

export interface StxRequests {
  stx_callContract: StxCallContract;
  stx_deployContract: StxDeployContract;
  stx_getAccounts: StxGetAccounts;
  stx_getAddresses: StxGetAddresses;
  stx_signMessage: StxSignStxMessage;
  stx_signStructuredMessage: StxSignStructuredMessage;
  stx_signTransaction: StxSignTransaction;
  stx_transferStx: StxTransferStx;
}

export type StxRequestMethod = keyof StxRequests;

export interface BtcRequests {
  getInfo: GetInfo;
  getAddresses: GetAddresses;
  getAccounts: GetAccounts;
  getBalance: GetBalance;
  signMessage: SignMessage;
  sendTransfer: SendTransfer;
  signPsbt: SignPsbt;
}

export type BtcRequestMethod = keyof BtcRequests;

export interface RunesRequests {
  runes_estimateMint: EstimateRunesMint;
  runes_mint: MintRunes;
  runes_estimateEtch: EstimateRunesEtch;
  runes_etch: EtchRunes;
  runes_getOrder: GetOrder;
  runes_estimateRbfOrder: EstimateRbfOrder;
  runes_rbfOrder: RbfOrder;
  runes_getBalance: GetRunesBalance;
}

export type RunesRequestMethod = keyof RunesRequests;

export interface WalletMethods {
  wallet_requestPermissions: RequestPermissions;
  wallet_renouncePermissions: RenouncePermissions;
}

export type Requests = BtcRequests & StxRequests & RunesRequests & WalletMethods;

export type Return<Method> = Method extends keyof Requests ? Requests[Method]['result'] : never;
export type Params<Method> = Method extends keyof Requests ? Requests[Method]['params'] : never;

export * from './stxMethods';
export * from './btcMethods';
export * from './walletMethods';
export * from './runesMethods';
