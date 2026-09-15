import * as v from 'valibot';
import { AddressPurpose, AddressType, addressSchema } from '../../src/addresses/types';
import { accountChangeSchema } from '../../src/provider/types';
import { bitcoinGetAccountsResultSchema } from '../../src/request/rpc/objects/namespaces/bitcoin/methods/getAccounts/response';
import { bitcoinGetAddressesResultSchema } from '../../src/request/rpc/objects/namespaces/bitcoin/methods/getAddresses/response';
import { walletConnectResultSchema } from '../../src/request/rpc/objects/namespaces/wallet/methods/connect/response';
import { walletConnectV2ResultSchema } from '../../src/request/rpc/objects/namespaces/wallet/methods/connectV2/response';
import { walletGetAccountResultSchema } from '../../src/request/rpc/objects/namespaces/wallet/methods/getAccount/response';

const baseAddress = {
  address: 'bc1qexample',
  publicKey: '02'.repeat(33),
  purpose: AddressPurpose.Payment,
  addressType: AddressType.p2wpkh,
  walletType: 'multisig' as const,
};

const p2wpkhAddress = {
  ...baseAddress,
  scriptPubKey: `0014${'11'.repeat(20)}`,
  unlockDefinition: { type: 'p2wpkh' as const },
};

const resolvedNetworks = {
  active: {
    bitcoin: {
      id: 'bitcoin-mainnet',
      name: 'Bitcoin Mainnet',
      mode: 'mainnet',
      source: 'builtin',
      chain: 'bitcoin',
      xverseApiUrl: 'https://api.example.com',
      electrsApiUrl: 'https://electrs.example.com',
    },
    spark: {
      id: 'spark-mainnet',
      name: 'Spark Mainnet',
      mode: 'mainnet',
      source: 'builtin',
      chain: 'spark',
      electrsApiUrl: 'https://spark.example.com',
    },
    stacks: {
      id: 'stacks-mainnet',
      name: 'Stacks Mainnet',
      mode: 'mainnet',
      source: 'builtin',
      chain: 'stacks',
      stacksApiUrl: 'https://stacks.example.com',
      xverseApiUrl: 'https://api.example.com',
    },
    starknet: {
      id: 'starknet-mainnet',
      name: 'Starknet Mainnet',
      mode: 'mainnet',
      source: 'builtin',
      chain: 'starknet',
      rpcApiUrl: 'https://rpc.example.com',
      xverseApiUrl: 'https://api.example.com',
    },
  },
  all: [],
};

describe('addressSchema', () => {
  it.each([
    {
      ...p2wpkhAddress,
    },
    {
      ...baseAddress,
      addressType: AddressType.p2sh,
      scriptPubKey: `a914${'22'.repeat(20)}87`,
      unlockDefinition: {
        type: 'p2sh-p2wpkh',
        redeemScript: `0014${'33'.repeat(20)}`,
      },
    },
    {
      ...baseAddress,
      addressType: AddressType.p2tr,
      scriptPubKey: `5120${'44'.repeat(32)}`,
      unlockDefinition: {
        type: 'p2tr-key-path',
        tapInternalKey: '55'.repeat(32),
      },
    },
    {
      ...baseAddress,
      addressType: AddressType.p2wsh,
      scriptPubKey: `0020${'66'.repeat(32)}`,
      unlockDefinition: {
        type: 'p2wsh',
        witnessScript: '51',
      },
    },
    {
      ...baseAddress,
      addressType: AddressType.p2tr,
      scriptPubKey: `5120${'77'.repeat(32)}`,
      unlockDefinition: {
        type: 'p2tr-script-path',
        tapLeafScript: [
          {
            script: '51c0',
            controlBlock: `c1${'88'.repeat(32)}`,
          },
        ],
      },
    },
  ])('accepts $unlockDefinition.type metadata', (address) => {
    expect(v.safeParse(addressSchema, address).success).toBe(true);
  });

  it('accepts a legacy address without PSBT metadata', () => {
    expect(v.safeParse(addressSchema, baseAddress).success).toBe(true);
  });

  it.each([
    ['scriptPubKey without unlockDefinition', { ...baseAddress, scriptPubKey: '0014' }],
    [
      'unlockDefinition without scriptPubKey',
      { ...baseAddress, unlockDefinition: { type: 'p2wpkh' } },
    ],
    ['uppercase hex', { ...p2wpkhAddress, scriptPubKey: '0014AA' }],
    ['odd-length hex', { ...p2wpkhAddress, scriptPubKey: '001' }],
    ['0x-prefixed hex', { ...p2wpkhAddress, scriptPubKey: '0x0014' }],
    [
      'wrong tapInternalKey length',
      {
        ...p2wpkhAddress,
        addressType: AddressType.p2tr,
        unlockDefinition: { type: 'p2tr-key-path', tapInternalKey: '11'.repeat(31) },
      },
    ],
    [
      'short control block',
      {
        ...p2wpkhAddress,
        addressType: AddressType.p2tr,
        unlockDefinition: {
          type: 'p2tr-script-path',
          tapLeafScript: [{ script: '51c0', controlBlock: `c0${'22'.repeat(31)}` }],
        },
      },
    ],
    [
      'invalid control block merkle path length',
      {
        ...p2wpkhAddress,
        addressType: AddressType.p2tr,
        unlockDefinition: {
          type: 'p2tr-script-path',
          tapLeafScript: [{ script: '51c0', controlBlock: `c0${'22'.repeat(33)}` }],
        },
      },
    ],
    [
      'control block deeper than 128 levels',
      {
        ...p2wpkhAddress,
        addressType: AddressType.p2tr,
        unlockDefinition: {
          type: 'p2tr-script-path',
          tapLeafScript: [{ script: '51c0', controlBlock: `c0${'22'.repeat(32 * 130)}` }],
        },
      },
    ],
    [
      'mismatched tapleaf version',
      {
        ...p2wpkhAddress,
        addressType: AddressType.p2tr,
        unlockDefinition: {
          type: 'p2tr-script-path',
          tapLeafScript: [{ script: '51c2', controlBlock: `c0${'22'.repeat(32)}` }],
        },
      },
    ],
    [
      'empty tapLeafScript',
      {
        ...p2wpkhAddress,
        addressType: AddressType.p2tr,
        unlockDefinition: { type: 'p2tr-script-path', tapLeafScript: [] },
      },
    ],
    [
      'unlock type that does not match addressType',
      {
        ...p2wpkhAddress,
        unlockDefinition: { type: 'p2wsh', witnessScript: '51' },
      },
    ],
  ])('rejects %s', (_name, address) => {
    expect(v.safeParse(addressSchema, address).success).toBe(false);
  });
});

describe('embedded address schemas', () => {
  it.each([
    ['bitcoin getAccounts', bitcoinGetAccountsResultSchema, [p2wpkhAddress]],
    [
      'bitcoin getAddresses',
      bitcoinGetAddressesResultSchema,
      {
        addresses: [p2wpkhAddress],
        network: {
          bitcoin: { name: 'Mainnet' },
          stacks: { name: 'mainnet' },
          spark: { name: 'mainnet' },
        },
      },
    ],
    [
      'wallet connect',
      walletConnectResultSchema,
      {
        id: 'account-id',
        addresses: [p2wpkhAddress],
        walletType: 'multisig',
        network: {
          bitcoin: { name: 'Mainnet' },
          stacks: { name: 'mainnet' },
          spark: { name: 'mainnet' },
        },
      },
    ],
    [
      'wallet connectV2',
      walletConnectV2ResultSchema,
      {
        accountId: 'account-id',
        addresses: [p2wpkhAddress],
        walletType: 'multisig',
        networks: resolvedNetworks,
      },
    ],
    [
      'wallet getAccount',
      walletGetAccountResultSchema,
      {
        id: 'account-id',
        addresses: [p2wpkhAddress],
        walletType: 'multisig',
        network: {
          bitcoin: { name: 'Mainnet' },
          stacks: { name: 'mainnet' },
          spark: { name: 'mainnet' },
        },
      },
    ],
    [
      'account-change event',
      accountChangeSchema,
      { type: 'accountChange', addresses: [p2wpkhAddress] },
    ],
  ])('accepts metadata through %s', (_name, schema, input) => {
    expect(v.safeParse(schema, input).success).toBe(true);
  });
});
