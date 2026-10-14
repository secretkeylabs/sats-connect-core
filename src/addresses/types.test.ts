import * as v from 'valibot';
import { addressObjectSchema, AddressPurpose, addressSchema, AddressType } from './types';

const paymentAddress = {
  address: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  publicKey: '02'.repeat(33),
  purpose: AddressPurpose.Payment,
  addressType: AddressType.p2wpkh,
  walletType: 'software' as const,
};

describe('addressObjectSchema', () => {
  it('keeps the address entries spreadable into a downstream object schema', () => {
    const extendedSchema = v.object({ ...addressObjectSchema.entries, label: v.string() });

    expect(v.parse(extendedSchema, { ...paymentAddress, label: 'main' })).toEqual({
      ...paymentAddress,
      label: 'main',
    });
  });
});

describe('addressSchema', () => {
  it('still rejects a scriptPubKey without an unlockDefinition', () => {
    expect(v.safeParse(addressSchema, paymentAddress).success).toBe(true);
    expect(
      v.safeParse(addressSchema, { ...paymentAddress, scriptPubKey: '0014'.padEnd(44, '0') })
        .success
    ).toBe(false);
  });
});
