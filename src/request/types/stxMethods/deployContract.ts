import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxDeployContractMethodName = 'stx_deployContract';
export const stxDeployContractParamsSchema = v.object({
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
  clarityVersion: v.optional(v.string()),

  /**
   * The post conditions to apply to the contract call.
   */
  postConditions: v.optional(v.array(v.string())),

  /**
   * The mode to apply to the post conditions.
   */
  postConditionMode: v.optional(v.union([v.literal('allow'), v.literal('deny')])),
});
export type StxDeployContractParams = v.InferOutput<typeof stxDeployContractParamsSchema>;
export const stxDeployContractResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  txid: v.string(),

  /**
   * A Stacks transaction as a hex-encoded string.
   */
  transaction: v.string(),
});
export type StxDeployContractResult = v.InferOutput<typeof stxDeployContractResultSchema>;
export const stxDeployContractRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxDeployContractMethodName),
    params: stxDeployContractParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxDeployContractRequestMessage = v.InferOutput<
  typeof stxDeployContractRequestMessageSchema
>;
export type StxDeployContract = MethodParamsAndResult<
  StxDeployContractParams,
  StxDeployContractResult
>;
