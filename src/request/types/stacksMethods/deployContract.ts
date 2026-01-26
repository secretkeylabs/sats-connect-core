import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const stacksDeployContractMethodName = 'stx_deployContract';
export const stacksDeployContractParamsSchema = v.object({
  /**
   * Name of the contract.
   */
  name: v.string(),

  /**
   * The source code of the Clarity contract.
   */
  clarityCode: v.string(),

  /**
   * The version of the Clarity contract.
   */
  clarityVersion: v.optional(v.number()),

  /**
   * The post conditions to apply to the contract call.
   */
  postConditions: v.optional(v.array(v.string())),

  /**
   * The mode to apply to the post conditions.
   */
  postConditionMode: v.optional(v.union([v.literal('allow'), v.literal('deny')])),
});
export type StacksDeployContractParams = v.InferOutput<typeof stacksDeployContractParamsSchema>;
export const stacksDeployContractResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  txid: v.string(),

  /**
   * A Stacks transaction as a hex-encoded string.
   */
  transaction: v.string(),
});
export type StacksDeployContractResult = v.InferOutput<typeof stacksDeployContractResultSchema>;
export const stacksDeployContractRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksDeployContractMethodName),
    params: stacksDeployContractParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksDeployContractRequestMessage = v.InferOutput<
  typeof stacksDeployContractRequestMessageSchema
>;
export type StacksDeployContract = MethodParamsAndResult<
  StacksDeployContractParams,
  StacksDeployContractResult
>;
