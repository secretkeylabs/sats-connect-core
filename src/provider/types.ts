import { RequestReturn } from 'src/request';
import { Method } from 'src/request/methods';
import {
  bitcoinNetworkConfigurationSchema,
  sparkNetworkConfigurationSchema,
  stacksNetworkConfigurationSchema,
  starknetNetworkConfigurationSchema,
} from 'src/request/rpc/objects/namespaces/wallet/shared/networks';
import { RpcRequestParams } from 'src/request/rpc/requests';
import {
  BitcoinRequestMethod,
  OrdinalsRequestMethod,
  RunesRequestMethod,
  StacksRequestMethod,
} from 'src/request/types';
import * as v from 'valibot';
import { addressSchema, GetAddressResponse } from '../addresses';
import type { GetCapabilitiesResponse } from '../capabilities';
import type { CreateInscriptionResponse, CreateRepeatInscriptionsResponse } from '../inscriptions';
import type { SignMessageResponse } from '../messages';
import type {
  SendBtcTransactionResponse,
  SignMultipleTransactionsResponse,
  SignTransactionResponse,
} from '../transactions';
import { BitcoinNetworkType } from '../types';

// accountChange
export const accountChangeEventName = 'accountChange';
export const accountChangeSchema = v.object({
  type: v.literal(accountChangeEventName),
  addresses: v.optional(v.array(addressSchema)),
});
export type AccountChangeEvent = v.InferOutput<typeof accountChangeSchema>;

// networkChange
export const networkChangeEventName = 'networkChange';
export const networkChangeSchema = v.object({
  type: v.literal(networkChangeEventName),
  bitcoin: v.object({
    name: v.enum(BitcoinNetworkType),
  }),
  stacks: v.object({
    name: v.string(),
  }),
  addresses: v.optional(v.array(addressSchema)),
});
export type NetworkChangeEvent = v.InferOutput<typeof networkChangeSchema>;

export const networkChangeEventNameV2 = 'networkChangeV2';
export const networkChangeV2Schema = v.object({
  type: v.literal(networkChangeEventName),
  networks: v.object({
    bitcoin: bitcoinNetworkConfigurationSchema,
    spark: sparkNetworkConfigurationSchema,
    stacks: stacksNetworkConfigurationSchema,
    starknet: starknetNetworkConfigurationSchema,
  }),
  addresses: v.optional(v.array(addressSchema)),
});
export type NetworkChangeEventV2 = v.InferOutput<typeof networkChangeSchema>;

// disconnect
export const disconnectEventName = 'disconnect';
export const disconnectSchema = v.object({
  type: v.literal(disconnectEventName),
});
export type DisconnectEvent = v.InferOutput<typeof disconnectSchema>;

export const walletEventSchema = v.variant('type', [
  accountChangeSchema,
  networkChangeSchema,
  disconnectSchema,
]);

export type WalletEvent = v.InferOutput<typeof walletEventSchema>;

export type AccountChangeCallback = (e: AccountChangeEvent) => void;
export type DisconnectCallback = (e: DisconnectEvent) => void;
export type NetworkChangeCallback = (e: NetworkChangeEvent) => void;

export type ListenerInfo =
  | {
      eventName: typeof accountChangeEventName;
      cb: AccountChangeCallback;
    }
  | {
      eventName: typeof disconnectEventName;
      cb: DisconnectCallback;
    }
  | {
      eventName: typeof networkChangeEventName;
      cb: NetworkChangeCallback;
    };

export type AddListener = (arg: ListenerInfo) => () => void;

interface BaseBitcoinProvider {
  request: <M extends Method>(
    method: M,
    options: RpcRequestParams<M>,
    providerId?: string
  ) => Promise<RequestReturn<M>>;
  connect: (request: string) => Promise<GetAddressResponse>;
  signMessage: (request: string) => Promise<SignMessageResponse>;
  signTransaction: (request: string) => Promise<SignTransactionResponse>;
  sendBtcTransaction: (request: string) => Promise<SendBtcTransactionResponse>;
  createInscription: (request: string) => Promise<CreateInscriptionResponse>;
  createRepeatInscriptions: (request: string) => Promise<CreateRepeatInscriptionsResponse>;
  signMultipleTransactions: (request: string) => Promise<SignMultipleTransactionsResponse>;
  addListener: AddListener;
}

export type Capability = keyof BaseBitcoinProvider;

export interface BitcoinProvider extends BaseBitcoinProvider {
  getCapabilities?: (request: string) => Promise<GetCapabilitiesResponse>;
}

export interface Provider {
  id: string;
  name: string;
  icon: string;
  webUrl?: string;
  chromeWebStoreUrl?: string;
  mozillaAddOnsUrl?: string;
  googlePlayStoreUrl?: string;
  iOSAppStoreUrl?: string;
  methods?: (
    | StacksRequestMethod
    | BitcoinRequestMethod
    | RunesRequestMethod
    | OrdinalsRequestMethod
  )[];
}

export interface SupportedWallet extends Provider {
  isInstalled: boolean;
}

declare global {
  interface XverseProviders {
    BitcoinProvider?: BitcoinProvider;
  }
  interface Window {
    BitcoinProvider?: BitcoinProvider;
    XverseProviders?: XverseProviders;
    btc_providers?: Provider[];
  }
}
