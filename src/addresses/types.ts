import * as v from 'valibot';
import type { RequestOptions, RequestPayload } from '../types';
import { walletTypeSchema } from '../request';

export enum AddressPurpose {
  Ordinals = 'ordinals',
  Payment = 'payment',
  Stacks = 'stacks',
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
}

export const addressSchema = v.object({
  address: v.string(),
  publicKey: v.string(),
  purpose: v.enum(AddressPurpose),
  addressType: v.enum(AddressType),
  walletType: walletTypeSchema,
});
export type Address = v.InferOutput<typeof addressSchema>;

export interface GetAddressResponse {
  addresses: Address[];
}

export type GetAddressOptions = RequestOptions<GetAddressPayload, GetAddressResponse>;
