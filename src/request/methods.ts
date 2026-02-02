// Bitcoin methods
export const bitcoinMethods = {
  getAccounts: 'getAccounts',
  bitcoin_getAccountsV2: 'bitcoin_getAccountsV2',
  getAddresses: 'getAddresses',
  bitcoin_getAddressesV2: 'bitcoin_getAddressesV2',
  getBalance: 'getBalance',
  bitcoin_getBalanceV2: 'bitcoin_getBalanceV2',
  getInfo: 'getInfo',
  bitcoin_getInfoV2: 'bitcoin_getInfoV2',
  sendTransfer: 'sendTransfer',
  bitcoin_sendTransferV2: 'bitcoin_sendTransferV2',
  signMessage: 'signMessage',
  bitcoin_signMessageV2: 'bitcoin_signMessageV2',
  signMultipleMessages: 'signMultipleMessages',
  bitcoin_signMultipleMessagesV2: 'bitcoin_signMultipleMessagesV2',
  signPsbt: 'signPsbt',
  bitcoin_signPsbtV2: 'bitcoin_signPsbtV2',
} as const;

export type BitcoinMethod = (typeof bitcoinMethods)[keyof typeof bitcoinMethods];

// Stacks methods
export const stacksMethods = {
  stx_callContract: 'stx_callContract',
  stx_deployContract: 'stx_deployContract',
  stx_getAccounts: 'stx_getAccounts',
  stx_getAddresses: 'stx_getAddresses',
  stacks_getAddressesV2: 'stacks_getAddressesV2',
  stx_signMessage: 'stx_signMessage',
  stx_signStructuredMessage: 'stx_signStructuredMessage',
  stx_signTransaction: 'stx_signTransaction',
  stx_signTransactions: 'stx_signTransactions',
  stx_transferStx: 'stx_transferStx',
} as const;

export type StacksMethod = (typeof stacksMethods)[keyof typeof stacksMethods];

// Spark methods
export const sparkMethods = {
  spark_getAddresses: 'spark_getAddresses',
  spark_getAddressesV2: 'spark_getAddressesV2',
  spark_getBalance: 'spark_getBalance',
  spark_transfer: 'spark_transfer',
  spark_transferToken: 'spark_transferToken',
  spark_signMessage: 'spark_signMessage',
  spark_flashnet_getJwt: 'spark_flashnet_getJwt',
  spark_flashnet_signIntent: 'spark_flashnet_signIntent',
  spark_flashnet_signStructuredMessage: 'spark_flashnet_signStructuredMessage',
  spark_flashnet_executeSwap: 'spark_flashnet_executeSwap',
  spark_flashnet_executeRouteSwap: 'spark_flashnet_executeRouteSwap',
  spark_flashnet_clawbackFunds: 'spark_flashnet_clawbackFunds',
  spark_flashnet_getClawbackEligibleTransfers: 'spark_flashnet_getClawbackEligibleTransfers',
} as const;

export type SparkMethod = (typeof sparkMethods)[keyof typeof sparkMethods];

// Runes methods
export const runesMethods = {
  runes_estimateEtch: 'runes_estimateEtch',
  runes_estimateMint: 'runes_estimateMint',
  runes_estimateRbfOrder: 'runes_estimateRbfOrder',
  runes_etch: 'runes_etch',
  runes_getBalance: 'runes_getBalance',
  runes_getOrder: 'runes_getOrder',
  runes_mint: 'runes_mint',
  runes_rbfOrder: 'runes_rbfOrder',
  runes_transfer: 'runes_transfer',
} as const;

export type RunesMethod = (typeof runesMethods)[keyof typeof runesMethods];

// Ordinals methods
export const ordinalsMethods = {
  ord_getInscriptions: 'ord_getInscriptions',
  ord_sendInscriptions: 'ord_sendInscriptions',
} as const;

export type OrdinalsMethod = (typeof ordinalsMethods)[keyof typeof ordinalsMethods];

// Wallet methods
export const walletMethods = {
  wallet_addNetwork: 'wallet_addNetwork',
  wallet_addNetworkV2: 'wallet_addNetworkV2',
  wallet_changeNetworkById: 'wallet_changeNetworkById',
  wallet_changeNetwork: 'wallet_changeNetwork',
  wallet_connect: 'wallet_connect',
  wallet_connectV2: 'wallet_connectV2',
  wallet_disconnect: 'wallet_disconnect',
  wallet_getAccount: 'wallet_getAccount',
  wallet_getAccountV2: 'wallet_getAccountV2',
  wallet_getCurrentPermissions: 'wallet_getCurrentPermissions',
  wallet_getNetwork: 'wallet_getNetwork',
  wallet_getNetworks: 'wallet_getNetworks',
  wallet_getWalletType: 'wallet_getWalletType',
  wallet_openBridge: 'wallet_openBridge',
  wallet_openBuy: 'wallet_openBuy',
  wallet_openReceive: 'wallet_openReceive',
  wallet_renouncePermissions: 'wallet_renouncePermissions',
  wallet_requestPermissions: 'wallet_requestPermissions',
} as const;

export type WalletMethod = (typeof walletMethods)[keyof typeof walletMethods];

// All methods
export const methods = {
  ...bitcoinMethods,
  ...stacksMethods,
  ...sparkMethods,
  ...runesMethods,
  ...ordinalsMethods,
  ...walletMethods,
};

export type Method = (typeof methods)[keyof typeof methods];
