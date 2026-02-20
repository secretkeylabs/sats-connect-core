import {
  bitcoinMethods,
  ordinalsMethods,
  runesMethods,
  sparkMethods,
  stacksMethods,
  walletMethods,
  type Method,
} from '../methods';

const supportStates = {
  active: 'active',
  deprecated: 'deprecated',
  removed: 'removed',
} as const;

const { active } = supportStates;

export type SupportState = (typeof supportStates)[keyof typeof supportStates];

export const methodSupport: Record<Method, SupportState> = {
  // Bitcoin methods
  [bitcoinMethods.getAccounts]: active,
  [bitcoinMethods.getAddresses]: active,
  [bitcoinMethods.bitcoin_getAddressesV2]: active,
  [bitcoinMethods.getBalance]: active,
  [bitcoinMethods.bitcoin_getBalanceV2]: active,
  [bitcoinMethods.getInfo]: active,
  [bitcoinMethods.sendTransfer]: active,
  [bitcoinMethods.bitcoin_sendTransferV2]: active,
  [bitcoinMethods.signMessage]: active,
  [bitcoinMethods.bitcoin_signMessageV2]: active,
  [bitcoinMethods.signMultipleMessages]: active,
  [bitcoinMethods.bitcoin_signMultipleMessagesV2]: active,
  [bitcoinMethods.signPsbt]: active,
  [bitcoinMethods.bitcoin_signPsbtV2]: active,

  // Stacks methods
  [stacksMethods.stx_callContract]: active,
  [stacksMethods.stx_deployContract]: active,
  [stacksMethods.stx_getAccounts]: active,
  [stacksMethods.stx_getAddresses]: active,
  [stacksMethods.stx_signMessage]: active,
  [stacksMethods.stx_signStructuredMessage]: active,
  [stacksMethods.stx_signTransaction]: active,
  [stacksMethods.stx_signTransactions]: active,
  [stacksMethods.stx_transferStx]: active,

  // Spark methods
  [sparkMethods.spark_getAddresses]: active,
  [sparkMethods.spark_getAddressesV2]: active,
  [sparkMethods.spark_getBalance]: active,
  [sparkMethods.spark_transfer]: active,
  [sparkMethods.spark_transferToken]: active,
  [sparkMethods.spark_signMessage]: active,
  [sparkMethods.spark_flashnet_getJwt]: active,
  [sparkMethods.spark_flashnet_signIntent]: active,
  [sparkMethods.spark_flashnet_signStructuredMessage]: active,
  [sparkMethods.spark_flashnet_executeSwap]: active,
  [sparkMethods.spark_flashnet_executeRouteSwap]: active,
  [sparkMethods.spark_flashnet_clawbackFunds]: active,
  [sparkMethods.spark_flashnet_getClawbackEligibleTransfers]: active,

  // Runes methods
  [runesMethods.runes_estimateEtch]: active,
  [runesMethods.runes_estimateMint]: active,
  [runesMethods.runes_estimateRbfOrder]: active,
  [runesMethods.runes_etch]: active,
  [runesMethods.runes_getBalance]: active,
  [runesMethods.runes_getOrder]: active,
  [runesMethods.runes_mint]: active,
  [runesMethods.runes_rbfOrder]: active,
  [runesMethods.runes_transfer]: active,

  // Ordinals methods
  [ordinalsMethods.ord_getInscriptions]: active,
  [ordinalsMethods.ord_sendInscriptions]: active,

  // Wallet methods
  [walletMethods.wallet_addNetwork]: active,
  [walletMethods.wallet_addNetworkV2]: active,
  [walletMethods.wallet_changeNetwork]: active,
  [walletMethods.wallet_connect]: active,
  [walletMethods.wallet_connectV2]: active,
  [walletMethods.wallet_disconnect]: active,
  [walletMethods.wallet_getAccount]: active,
  [walletMethods.wallet_getAccountV2]: active,
  [walletMethods.wallet_getCurrentPermissions]: active,
  [walletMethods.wallet_getNetwork]: active,
  [walletMethods.wallet_getNetworks]: active,
  [walletMethods.wallet_getWalletType]: active,
  [walletMethods.wallet_openBridge]: active,
  [walletMethods.wallet_openBuy]: active,
  [walletMethods.wallet_openReceive]: active,
  [walletMethods.wallet_renouncePermissions]: active,
  [walletMethods.wallet_requestPermissions]: active,
  [walletMethods.wallet_switchNetwork]: active,
};

export const defineMethodSupport = (
  supportDefinition: Record<Method, SupportState>
): Record<Method, SupportState> => {
  return supportDefinition;
};
