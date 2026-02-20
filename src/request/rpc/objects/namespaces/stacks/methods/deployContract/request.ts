import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const stacksDeployContractRequestSchema = createRequestSchema({
  paramsSchema: stacksDeployContractParamsSchema,
  method: stacksMethods.stx_deployContract,
});

export type StacksDeployContractRequest = v.InferOutput<typeof stacksDeployContractRequestSchema>;
