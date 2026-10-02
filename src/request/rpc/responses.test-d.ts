import type { Method } from '../methods';
import type {
  StacksGetAccountsResult,
  StacksLegacyAccount,
  StacksMultisigAccount,
  StacksSignTransactionsBroadcastErrorData,
  StacksSignTransactionsResult,
} from './objects/namespaces/stacks';
import type { RpcSuccessResponse } from './responses';

// These two helper types are from:
//
// - https://frontendmasters.com/blog/testing-types-in-typescript/
type Expect<T extends true> = T;
type ShapesMatch<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

// Ensure RpcSuccessResponse includes a variant for all Methods
type AssertRpcSuccessResponseCoversAllMethods =
  Method extends RpcSuccessResponse['~sats-connect-method'] ? true : false;

// Ensure RpcSuccessResponse does not include any extra Methods
type AssertRpcSuccessResponseMethodsAreValid =
  RpcSuccessResponse['~sats-connect-method'] extends Method ? true : false;

// Ensure RpcSuccessResponse["~sats-connect-method"] is exactly Method (no more, no less)
type AssertRpcSuccessResponseAndMethodsMatch = ShapesMatch<
  Method,
  RpcSuccessResponse['~sats-connect-method']
>;

// stx_getAccounts entries are either a legacy single-sig account or a vault account
type AssertStacksAccountIsLegacyOrMultisig = ShapesMatch<
  StacksGetAccountsResult['addresses'][number],
  StacksLegacyAccount | StacksMultisigAccount
>;

// Legacy single-sig entries keep their existing required fields and an optional non-vault walletType
type AssertStacksLegacyAccountShape = ShapesMatch<
  StacksLegacyAccount,
  {
    address: string;
    publicKey: string;
    gaiaHubUrl: string;
    gaiaAppKey: string;
    walletType?: 'software' | 'ledger' | 'keystone';
  }
>;

// Vault entries carry the multisig definition and never a single-sig publicKey or Gaia fields
type AssertStacksMultisigAccountShape = ShapesMatch<
  StacksMultisigAccount,
  {
    address: string;
    walletType: 'multisig';
    multisig: { hashMode: 'P2SHNonSequential'; threshold: number; publicKeys: string[] };
  }
>;
type AssertStacksMultisigAccountHasNoSingleSigFields =
  | 'publicKey'
  | 'gaiaHubUrl'
  | 'gaiaAppKey' extends keyof StacksMultisigAccount
  ? false
  : true;

// stx_signTransactions result may carry txids alongside the signed transactions
type AssertStacksSignTransactionsTxidsAreOptional = ShapesMatch<
  StacksSignTransactionsResult['txids'],
  string[] | undefined
>;

// A stopped batch reports every transaction with its broadcast status
type AssertStacksSignTransactionsBroadcastErrorDataShape = ShapesMatch<
  StacksSignTransactionsBroadcastErrorData['transactions'][number],
  {
    index: number;
    transaction: string;
    status: 'broadcast' | 'failed' | 'not_broadcast';
    txid?: string;
    error?: string;
  }
>;

type _Tests = [
  Expect<AssertRpcSuccessResponseCoversAllMethods>,
  Expect<AssertRpcSuccessResponseMethodsAreValid>,
  Expect<AssertRpcSuccessResponseAndMethodsMatch>,
  Expect<AssertStacksAccountIsLegacyOrMultisig>,
  Expect<AssertStacksLegacyAccountShape>,
  Expect<AssertStacksMultisigAccountShape>,
  Expect<AssertStacksMultisigAccountHasNoSingleSigFields>,
  Expect<AssertStacksSignTransactionsTxidsAreOptional>,
  Expect<AssertStacksSignTransactionsBroadcastErrorDataShape>,
];
