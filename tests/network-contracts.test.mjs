/* eslint-disable import/no-unresolved -- CI builds the tested package artifact after linting. */
/* global globalThis */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as v from 'valibot';
import {
  createRpcSuccessResponse,
  listen,
  stacksAccountChangeResultSchema,
  stacksGetNetworksRequestSchema,
  stacksGetNetworksResultSchema,
  stacksNetworkConfigurationOptionsSchema,
  walletAddNetworkV2RequestSchema,
  walletEventSchema,
  walletGetNetworkResultSchema,
} from '../dist/index.mjs';

const network = {
  chain: 'stacks',
  mode: 'devnet',
  name: 'Custom',
  stacksApiUrl: 'https://stacks.example',
  xverseApiUrl: 'https://xverse.example',
};
test('chain ID overrides survive RPC validation, including zero', () => {
  for (const chainId of [0, 256, 0xffffffff]) {
    const output = v.parse(walletAddNetworkV2RequestSchema, {
      jsonrpc: '2.0',
      id: '1',
      method: 'wallet_addNetworkV2',
      params: { network: { ...network, chainId } },
    });
    assert.equal(output.params.network.chainId, chainId);
  }
});
test('invalid overrides are rejected consistently with Core', () => {
  for (const chainId of [-1, 1.5, 0x100000000, NaN, Infinity, '256']) {
    assert.equal(
      v.safeParse(stacksNetworkConfigurationOptionsSchema, {
        ...network,
        id: 'id',
        source: 'custom',
        chainId,
      }).success,
      false
    );
  }
});
test('omitted overrides remain omitted', () => {
  const parsed = v.parse(stacksNetworkConfigurationOptionsSchema, {
    ...network,
    id: 'id',
    source: 'custom',
  });
  assert.equal('chainId' in parsed, false);
});
test('SIP requests accept omitted/null parameters, not arbitrary objects', () => {
  const request = { jsonrpc: '2.0', id: '1', method: 'stx_getNetworks' };
  assert.equal(v.safeParse(stacksGetNetworksRequestSchema, request).success, true);
  assert.equal(
    v.safeParse(stacksGetNetworksRequestSchema, { ...request, params: null }).success,
    true
  );
  assert.equal(
    v.safeParse(stacksGetNetworksRequestSchema, { ...request, params: {} }).success,
    false
  );
});
test('SIP events and requests share the result shape and numeric parameters', () => {
  const result = { active: 'id', networks: [{ id: 'id', chainId: 0, transactionVersion: 128 }] };
  assert.deepEqual(v.parse(stacksGetNetworksResultSchema, result), result);
  assert.deepEqual(
    v.parse(walletEventSchema, { type: 'stx_networkChange', result }).result,
    result
  );
  assert.equal(
    v.safeParse(stacksGetNetworksResultSchema, {
      ...result,
      networks: [{ id: 'id', chainId: '0', transactionVersion: '128' }],
    }).success,
    false
  );
});
test('SIP account events are bare accounts arrays, including empty authorization results', () => {
  const result = [
    {
      address: 'SP123',
      publicKey: '02abc',
      gaiaHubUrl: 'https://gaia.invalid',
      gaiaAppKey: '0'.repeat(64),
    },
  ];
  assert.deepEqual(v.parse(stacksAccountChangeResultSchema, result), result);
  assert.deepEqual(
    v.parse(walletEventSchema, { type: 'stx_accountChange', result }).result,
    result
  );
  assert.deepEqual(v.parse(stacksAccountChangeResultSchema, []), []);
  assert.equal(v.safeParse(stacksAccountChangeResultSchema, { accounts: result }).success, false);
  assert.equal(
    v.safeParse(stacksAccountChangeResultSchema, [{ address: 'SP123', publicKey: '02abc' }])
      .success,
    false
  );
  const legacy = { type: 'accountChange', addresses: [] };
  assert.deepEqual(v.parse(walletEventSchema, legacy), legacy);
});
test('SDK listen delegates account events with the native receiver and unlisten', () => {
  const cleanup = () => {};
  const callback = () => {};
  const provider = {
    listen(event, cb) {
      assert.equal(this, provider);
      assert.equal(event, 'stx_accountChange');
      assert.equal(cb, callback);
      return cleanup;
    },
  };
  const previousWindow = globalThis.window;
  globalThis.window = { XverseProviders: { BitcoinProvider: provider } };
  try {
    assert.equal(listen('stx_accountChange', callback), cleanup);
    delete provider.listen;
    assert.throws(() => listen('stx_accountChange', callback), /does not support/);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});
test('legacy network response/event payloads remain unchanged', () => {
  const result = {
    bitcoin: { name: 'Mainnet' },
    stacks: { name: 'mainnet' },
    spark: { name: 'mainnet' },
  };
  assert.deepEqual(v.parse(walletGetNetworkResultSchema, result), result);
  assert.equal(
    createRpcSuccessResponse({ method: 'wallet_getNetwork', id: '1', result }).result,
    result
  );
  const event = { type: 'networkChange', bitcoin: result.bitcoin, stacks: result.stacks };
  assert.deepEqual(v.parse(walletEventSchema, event), event);
});
