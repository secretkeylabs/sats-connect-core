import { walletTypeSchema } from 'src/request/rpc/objects/shared';
import * as v from 'valibot';
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

const hexSchema = v.pipe(
  v.string(),
  v.regex(/^(?:[0-9a-f]{2})+$/, 'Expected lowercase, even-length hex without a 0x prefix')
);

const tapInternalKeySchema = v.pipe(hexSchema, v.length(64, 'Expected a 32-byte x-only key'));

const controlBlockSchema = v.pipe(
  hexSchema,
  v.check(
    (controlBlock) =>
      controlBlock.length >= 66 &&
      controlBlock.length <= 66 + 64 * 128 &&
      (controlBlock.length - 66) % 64 === 0,
    'Expected a 33+32n byte BIP341 control block'
  )
);

const tapLeafScriptSchema = v.pipe(
  v.object({
    script: hexSchema,
    controlBlock: controlBlockSchema,
  }),
  v.check(
    ({ script, controlBlock }) =>
      Number.parseInt(script.slice(-2), 16) ===
      (Number.parseInt(controlBlock.slice(0, 2), 16) & 0xfe),
    'Tapleaf version does not match the control block'
  )
);

export const unlockDefinitionSchema = v.variant('type', [
  v.object({ type: v.literal('p2wpkh') }),
  v.object({ type: v.literal('p2sh-p2wpkh'), redeemScript: hexSchema }),
  v.object({ type: v.literal('p2tr-key-path'), tapInternalKey: tapInternalKeySchema }),
  v.object({ type: v.literal('p2wsh'), witnessScript: hexSchema }),
  v.object({
    type: v.literal('p2tr-script-path'),
    tapLeafScript: v.pipe(v.array(tapLeafScriptSchema), v.minLength(1)),
  }),
]);

export type UnlockDefinition = v.InferOutput<typeof unlockDefinitionSchema>;

export const addressSchema = v.pipe(
  v.object({
    address: v.string(),
    publicKey: v.string(),
    purpose: v.enum(AddressPurpose),
    addressType: v.enum(AddressType),
    walletType: walletTypeSchema,
    scriptPubKey: v.optional(hexSchema),
    unlockDefinition: v.optional(unlockDefinitionSchema),
  }),
  v.check(
    ({ scriptPubKey, unlockDefinition }) =>
      (scriptPubKey === undefined) === (unlockDefinition === undefined),
    'scriptPubKey and unlockDefinition must both be present or both be absent'
  ),
  v.check(({ addressType, unlockDefinition }) => {
    if (!unlockDefinition) return true;

    switch (unlockDefinition.type) {
      case 'p2wpkh':
        return addressType === AddressType.p2wpkh;
      case 'p2sh-p2wpkh':
        return addressType === AddressType.p2sh;
      case 'p2tr-key-path':
      case 'p2tr-script-path':
        return addressType === AddressType.p2tr;
      case 'p2wsh':
        return addressType === AddressType.p2wsh;
    }
  }, 'unlockDefinition type does not match addressType')
);

export type Address = v.InferOutput<typeof addressSchema>;

export interface GetAddressResponse {
  addresses: Address[];
}

export type GetAddressOptions = RequestOptions<GetAddressPayload, GetAddressResponse>;
