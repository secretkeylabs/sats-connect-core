import {
  BtcRequestMethod,
  OrdinalsRequestMethod,
  Params,
  Requests,
  RunesRequestMethod,
  StxRequestMethod,
} from '../request';
import type { GetAddressResponse } from '../addresses';
import type { GetCapabilitiesResponse } from '../capabilities';
import type { CreateInscriptionResponse, CreateRepeatInscriptionsResponse } from '../inscriptions';
import type { SignMessageResponse } from '../messages';
import type {
  SendBtcTransactionResponse,
  SignMultipleTransactionsResponse,
  SignTransactionResponse,
} from '../transactions';
import { RpcResponse } from '../types';
import * as v from 'valibot';

// accountChange
export const accountChangeEventName = 'accountChange';
export const accountChangeSchema = v.object({
  type: v.literal(accountChangeEventName),
});
export type AccountChangeEvent = v.InferOutput<typeof accountChangeSchema>;

// networkChange
export const networkChangeEventName = 'networkChange';
export const networkChangeSchema = v.object({
  type: v.literal(networkChangeEventName),
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

export type AddListener = <const WalletEventName extends WalletEvent['type']>(
  eventName: WalletEventName,
  cb: (event: Extract<WalletEvent, { type: WalletEventName }>) => void
) => () => void;

interface BaseBitcoinProvider {
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
