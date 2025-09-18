import * as v from 'valibot';
import { addressSchema, GetAddressResponse } from '../addresses';
import type { GetCapabilitiesResponse } from '../capabilities';
import type { CreateInscriptionResponse, CreateRepeatInscriptionsResponse } from '../inscriptions';
import type { SignMessageResponse } from '../messages';
import {
  BtcRequestMethod,
  OrdinalsRequestMethod,
  Params,
  Requests,
  RunesRequestMethod,
  StxRequestMethod,
} from '../request';
import type {
  SendBtcTransactionResponse,
  SignMultipleTransactionsResponse,
  SignTransactionResponse,
} from '../transactions';
import { BitcoinNetworkType, RpcResponse } from '../types';

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
  version?: number;
  request: <Method extends keyof Requests>(
    method: Method,
    options: Params<Method>,
    providerId?: string
  ) => Promise<RpcResponse<Method>>;
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
  methods?: (StxRequestMethod | BtcRequestMethod | RunesRequestMethod | OrdinalsRequestMethod)[];
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
