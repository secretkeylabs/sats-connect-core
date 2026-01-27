import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { stacksMethods } from '../../../../methods';

export const stacksDeployContractRequestSchema = createRequestSchema({
  paramsSchema: v.object({
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
  }),
  method: stacksMethods.stx_deployContract,
});

export type StacksDeployContractRequest = v.InferOutput<typeof stacksDeployContractRequestSchema>;
