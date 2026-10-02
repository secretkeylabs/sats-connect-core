import { BitcoinNetworkType, SparkNetworkType, StacksNetworkType } from 'src/types';
import * as v from 'valibot';
import { stacksGetAccountsResultSchema } from './response';

const network = {
  bitcoin: { name: BitcoinNetworkType.Mainnet },
  stacks: { name: StacksNetworkType.Mainnet },
  spark: { name: SparkNetworkType.Mainnet },
};

const legacyAccount = {
  address: 'SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7',
  publicKey: '02'.repeat(33),
  gaiaHubUrl: 'https://hub.example.com',
  gaiaAppKey: '03'.repeat(33),
};

const multisigAccount = {
  address: 'SM2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7',
  walletType: 'multisig' as const,
  multisig: {
    hashMode: 'P2SHNonSequential' as const,
    threshold: 2,
    publicKeys: ['02'.repeat(33), '03'.repeat(33), `02${'ab'.repeat(32)}`],
  },
};

const parse = (addresses: unknown[]) =>
  v.safeParse(stacksGetAccountsResultSchema, { addresses, network }).success;

describe('stacksGetAccountsResultSchema', () => {
  it('accepts a legacy single-sig account without walletType', () => {
    expect(parse([legacyAccount])).toBe(true);
  });

  it.each(['software', 'ledger', 'keystone'])(
    'accepts a legacy single-sig account with walletType %s',
    (walletType) => {
      expect(parse([{ ...legacyAccount, walletType }])).toBe(true);
    }
  );

  it('accepts a vault account with a multisig definition and no single-sig fields', () => {
    expect(parse([multisigAccount])).toBe(true);
  });

  it('accepts legacy and vault accounts in the same list', () => {
    expect(parse([legacyAccount, multisigAccount])).toBe(true);
  });

  it.each([
    ['publicKey', { ...multisigAccount, publicKey: '02'.repeat(33) }],
    ['gaiaHubUrl', { ...multisigAccount, gaiaHubUrl: 'https://hub.example.com' }],
    ['gaiaAppKey', { ...multisigAccount, gaiaAppKey: '03'.repeat(33) }],
  ])('rejects a vault account that carries %s', (_field, account) => {
    expect(parse([account])).toBe(false);
  });

  it('rejects a single-sig account with walletType multisig', () => {
    expect(parse([{ ...legacyAccount, walletType: 'multisig' }])).toBe(false);
  });

  it('rejects a vault account without a multisig definition', () => {
    const { multisig: _multisig, ...withoutMultisig } = multisigAccount;
    expect(parse([withoutMultisig])).toBe(false);
  });

  it.each([
    ['unknown hashMode', { ...multisigAccount.multisig, hashMode: 'P2SH' }],
    ['zero threshold', { ...multisigAccount.multisig, threshold: 0 }],
    ['fractional threshold', { ...multisigAccount.multisig, threshold: 1.5 }],
    ['no public keys', { ...multisigAccount.multisig, publicKeys: [] }],
    [
      'uncompressed public key',
      { ...multisigAccount.multisig, publicKeys: [`04${'ab'.repeat(64)}`] },
    ],
    ['uppercase public key', { ...multisigAccount.multisig, publicKeys: [`02${'AB'.repeat(32)}`] }],
    ['short public key', { ...multisigAccount.multisig, publicKeys: [`02${'ab'.repeat(31)}`] }],
  ])('rejects a multisig definition with %s', (_case, multisig) => {
    expect(parse([{ ...multisigAccount, multisig }])).toBe(false);
  });
});
