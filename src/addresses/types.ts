import * as v from 'valibot';
import { walletTypeSchema } from '../request/types/common';
import type { RequestOptions, RequestPayload } from '../types';

export enum AddressPurpose {
  Ordinals = 'ordinals',
  Payment = 'payment',
  Stacks = 'stacks',
  Starknet = 'starknet',
  Spark = 'spark',
}

export interface GetAddressPayload extends RequestPayload {
  purposes: AddressPurpose[];
  message: string;
}

export enum AddressType {
  p2pkh = 'p2pkh',
  p2sh = 'p2sh',
  p2wpkh = 'p2wpkh',
  p2wsh = 'p2wsh',
  p2tr = 'p2tr',
  stacks = 'stacks',
  starknet = 'starknet',
  spark = 'spark',
}

// for internal address type use below
type AddressWithPublicKey =
  | AddressPurpose.Payment
  | AddressPurpose.Ordinals
  | AddressPurpose.Stacks;
type AddressWithoutPublicKey = Exclude<AddressPurpose, AddressWithPublicKey>;

export const addressSchema = v.object({
  address: v.string(),
  publicKey: v.optional(v.string()),
  purpose: v.enum(AddressPurpose),
  addressType: v.enum(AddressType),
  walletType: walletTypeSchema,
});
export type Address = Exclude<v.InferOutput<typeof addressSchema>, 'purpose' | 'publicKey'> &
  (
    | {
        purpose: AddressWithPublicKey;
        publicKey: string;
      }
    | {
        purpose: AddressWithoutPublicKey;
        publicKey?: undefined;
      }
  );

export interface GetAddressResponse {
  addresses: Address[];
}

export type GetAddressOptions = RequestOptions<GetAddressPayload, GetAddressResponse>;
