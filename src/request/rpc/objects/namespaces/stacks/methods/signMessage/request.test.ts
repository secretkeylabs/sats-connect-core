import * as v from 'valibot';
import { stacksSignMessageParamsSchema } from './request';

describe('stacksSignMessageParamsSchema', () => {
  it('defaults the signer to the selected account', () => {
    const result = v.parse(stacksSignMessageParamsSchema, { message: 'hello' });

    expect(result).toEqual({ message: 'hello', signer: 'account' });
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
