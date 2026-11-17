import type { RpcRequestParams } from 'src/request/rpc/requests';
import * as v from 'valibot';
import { stacksSignMessageParamsSchema, type StacksSignMessageParams } from './request';

// A caller written before vaults existed, and the request() params type it compiles against.
const legacyParams: StacksSignMessageParams = { message: 'hello' };
const legacyRequestParams: RpcRequestParams<'stx_signMessage'> = { message: 'hello' };

describe('stacksSignMessageParamsSchema', () => {
  it('keeps signer optional for callers that predate vaults', () => {
    expect(legacyParams).toEqual({ message: 'hello' });
    expect(legacyRequestParams).toEqual({ message: 'hello' });
    expect(v.parse(stacksSignMessageParamsSchema, { message: 'hello' })).toEqual({
      message: 'hello',
    });
  });

  it('accepts the member signer for a vault co-owner', () => {
    expect(
      v.safeParse(stacksSignMessageParamsSchema, { message: 'hello', signer: 'member' }).success
    ).toBe(true);
  });

  it.each(['member-key', 'vault', 'partial', 1, null])('rejects signer %s', (signer) => {
    expect(v.safeParse(stacksSignMessageParamsSchema, { message: 'hello', signer }).success).toBe(
      false
    );
  });

  it('rejects a missing message', () => {
    expect(v.safeParse(stacksSignMessageParamsSchema, { signer: 'member' }).success).toBe(false);
  });
});
