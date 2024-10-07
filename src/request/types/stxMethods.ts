import * as v from 'valibot';
import { addressSchema } from '../../addresses';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';

interface Pubkey {
  /**
   * When sending a transfer STX request to a wallet, users can generally
   * choose from which accout they want to send the STX tokens from. In
   * cases where applications want the transfer to be made from a specific
   * account, they can provide the `pubkey` of the address they'd like the
   * transfer to be made from. It is up to wallet providers to handle this
   * field as they see fit.
   */
  pubkey: string;
}

interface Address {
  /**
   * A Crockford base-32 encoded Stacks address.
   */
  address: string;
}

interface ContractName {
  /**
   * The name of the contract.
   */
  contract: string;
}

interface PostConditions {
  /**
   * A hex-encoded string representing the post conditions.
   *
   * A post condition may be converted to it's hex representation using the `serializePostCondition` helper from the `@stacks/transactions` package,
   *
   * ```js
   * import { serializePostCondition } from '@stacks/transactions';
   *
   * const postCondition = somePostCondition;
   * const hexPostCondition = serializePostCondition(postCondition).toString('hex');
   * ```
   */
  postConditions: Array<string>;
}

interface PostConditionMode {
  /**
   * The mode of the post conditions.
   */
  postConditionMode: number;
}

interface AnchorMode {
  /**
   * The anchor mode.
   */
  anchorMode: 'TODO'; // AnchorMode
}

interface Nonce {
  /**
   * A number in string format.
   */
  nonce: string; // BigInt
}

interface ParameterFormatVersion {
  /**
   * Version of parameter format.
   */
  version: string;
}

interface Sponsored {
  /**
   * Whether the transaction is sponsored.
   */
  sponsored: boolean;
}

interface Recipient {
  /**
   * The recipeint's Crockford base-32 encoded Stacks address.
   */
  recipient: string;
}

interface Amount {
  /**
   * Amount of STX tokens to transfer in microstacks as a string. Anything
   * parseable by `BigInt` is acceptable.
   *
   * Example,
   *
   * ```js
   * const amount1 = 1234;
   * const amount2 = 1234n;
   * const amount3 = '1234';
   * ```
   */
  amount: number | string;
}

interface Memo {
  /**
   * A string representing the memo.
   */
  memo: string;
}

interface TxId {
  /**
   * The ID of the transaction.
   */
  txid: string;
}

interface Transaction {
  /**
   * A Stacks transaction as a hex-encoded string.
   */
  transaction: string;
}

interface Message {
  /**
   * Message payload to be signed.
   */
  message: string;
}

interface Signature {
  /**
   * Signature of the message.
   */
  signature: string;
}

interface PublicKey {
  /**
   * Public key as hex-encoded string.
   */
  publicKey: string;
}

interface Domain {
  /**
   * The domain to be signed.
   */
  domain: string;
}

interface CodeBody {
  /**
   * The code body of the Clarity contract.
   */
  codeBody: string;
}

// Types for `stx_callContract` request
export const stxCallContractMethodName = 'stx_callContract';
export const stxCallContractParamsSchema = v.object({
  /**
   * The contract principal.
   *
   * E.g. `"SPKE...GD5C.my-contract"`
   */
  contract: v.string(),

  /**
   * The name of the function to call.
   *
   * Note: spec changes ongoing,
   * https://github.com/stacksgov/sips/pull/166#pullrequestreview-1914236999
   */
  functionName: v.string(),

  /**
   * The function's arguments. The arguments are expected to be hex-encoded
   * strings of Clarity values.
   *
   * To convert Clarity values to their hex representation, the `cvToString`
   * helper from the `@stacks/transactions` package may be helpful.
   *
   * ```js
   * import { cvToString } from '@stacks/transactions';
   *
   * const functionArgs = [someClarityValue1, someClarityValue2];
   * const hexArgs = functionArgs.map(cvToString);
   * ```
   */
  arguments: v.optional(v.array(v.string())),
});
export type StxCallContractParams = v.InferOutput<typeof stxCallContractParamsSchema>;
export const stxCallContractResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  txid: v.string(),

  /**
   * A Stacks transaction as a hex-encoded string.
   */
  transaction: v.string(),
});
export type StxCallContractResult = v.InferOutput<typeof stxCallContractResultSchema>;
export const stxCallContractRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxCallContractMethodName),
    params: stxCallContractParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxCallContractRequestMessage = v.InferOutput<
  typeof stxCallContractRequestMessageSchema
>;
export type StxCallContract = MethodParamsAndResult<StxCallContractParams, StxCallContractResult>;

// Types for `stx_transferStx` request
export type TransferStxParams = Amount &
  Recipient &
  Partial<Memo> &
  Partial<ParameterFormatVersion> &
  Partial<PostConditionMode> &
  Partial<PostConditions> &
  Partial<Pubkey>;
export type TransferStxResult = TxId & Transaction;
export type StxTransferStx = MethodParamsAndResult<TransferStxParams, TransferStxResult>;

// Types for `stx_signMessage` request
export type SignStxMessageParams = Message & Partial<Pubkey> & Partial<ParameterFormatVersion>;
export type SignStxMessageResult = Signature & PublicKey;
export type StxSignStxMessage = MethodParamsAndResult<SignStxMessageParams, SignStxMessageResult>;

// Types for `stx_signStructuredMessage` request
type SignStructuredMessageParams = Domain &
  Message &
  Partial<ParameterFormatVersion> &
  Partial<Pubkey>;
export type SignStructuredMessageResult = Signature & PublicKey;
export type StxSignStructuredMessage = MethodParamsAndResult<
  SignStructuredMessageParams,
  SignStructuredMessageResult
>;

// Types for `stx_deployContract` request
export interface DeployContractParams {
  /**
   * Name of the contract.
   */
  name: string;

  /**
   * The code of the Clarity contract.
   */
  clarityCode: string;

  /**
   * The version of the Clarity contract.
   */
  clarityVersion?: string;
}
export type DeployContractResult = TxId & Transaction;
export type StxDeployContract = MethodParamsAndResult<DeployContractParams, DeployContractResult>;

// Types for `stx_getAccounts` request
export type StxGetAccountsResult = {
  addresses: Array<Address & PublicKey & { gaiaHubUrl: string; gaiaAppKey: string }>;
};
export type StxGetAccounts = MethodParamsAndResult<{}, StxGetAccountsResult>;

export const stxGetAddressesMethodName = 'stx_getAddresses';
export const stxGetAddressesParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type StxGetAddressesParams = v.InferOutput<typeof stxGetAddressesParamsSchema>;
export const stxGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
});
export type StxGetAddressesResult = v.InferOutput<typeof stxGetAddressesResultSchema>;
export const stxGetAddressesRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxGetAddressesMethodName),
    params: stxGetAddressesParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxGetAddressesRequestMessage = v.InferOutput<
  typeof stxGetAddressesRequestMessageSchema
>;
export type StxGetAddresses = MethodParamsAndResult<
  v.InferOutput<typeof stxGetAddressesParamsSchema>,
  v.InferOutput<typeof stxGetAddressesResultSchema>
>;

export const stxSignTransactionMethodName = 'stx_signTransaction';
export const stxSignTransactionParamsSchema = v.object({
  /**
   * The transaction to sign as a hex-encoded string.
   */
  transaction: v.string(),
  /**
   * The public key to sign the transaction with. The wallet may use any key
   * when not provided.
   */
  pubkey: v.optional(v.string()),
  /**
   * Whether to broadcast the transaction after signing. Defaults to `true`.
   */
  broadcast: v.optional(v.boolean()),
});
export type StxSignTransactionParams = v.InferOutput<typeof stxSignTransactionParamsSchema>;
export const stxSignTransactionResultSchema = v.object({
  /**
   * The signed transaction as a hex-encoded string.
   */
  transaction: v.string(),
});
export type StxSignTransactionResult = v.InferOutput<typeof stxSignTransactionResultSchema>;
export const stxSignTransactionRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxSignTransactionMethodName),
    params: stxSignTransactionParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxSignTransactionRequestMessage = v.InferOutput<
  typeof stxSignTransactionRequestMessageSchema
>;
export type StxSignTransaction = MethodParamsAndResult<
  StxSignTransactionParams,
  StxSignTransactionResult
>;
