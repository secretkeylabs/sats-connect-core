import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

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
