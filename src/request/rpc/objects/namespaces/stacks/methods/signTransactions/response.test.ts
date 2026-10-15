import * as v from 'valibot';
import { stacksSignTransactionsBroadcastErrorDataSchema } from './errorData';
import { stacksSignTransactionsResultSchema } from './response';

const transactions = ['00'.repeat(4), '01'.repeat(4)];

describe('stacksSignTransactionsResultSchema', () => {
  it('accepts a result with only signed transactions', () => {
    expect(v.safeParse(stacksSignTransactionsResultSchema, { transactions }).success).toBe(true);
  });

  it('accepts a result with one txid per signed transaction', () => {
    const txids = ['aa'.repeat(32), 'bb'.repeat(32)];
    expect(v.safeParse(stacksSignTransactionsResultSchema, { transactions, txids }).success).toBe(
      true
    );
  });

  it('rejects txids that are not strings', () => {
    expect(
      v.safeParse(stacksSignTransactionsResultSchema, { transactions, txids: [1] }).success
    ).toBe(false);
  });
});

describe('stacksSignTransactionsBroadcastErrorDataSchema', () => {
  it('accepts a stopped batch with broadcast, failed and not_broadcast transactions', () => {
    const data = {
      transactions: [
        { index: 0, transaction: transactions[0], status: 'broadcast', txid: 'aa'.repeat(32) },
        {
          index: 1,
          transaction: transactions[1],
          status: 'failed',
          error: 'ConflictingNonceInMempool',
        },
        { index: 2, transaction: '02'.repeat(4), status: 'not_broadcast' },
      ],
    };
    expect(v.safeParse(stacksSignTransactionsBroadcastErrorDataSchema, data).success).toBe(true);
  });

  it('rejects an unknown transaction status', () => {
    const data = {
      transactions: [{ index: 0, transaction: transactions[0], status: 'pending' }],
    };
    expect(v.safeParse(stacksSignTransactionsBroadcastErrorDataSchema, data).success).toBe(false);
  });
});
