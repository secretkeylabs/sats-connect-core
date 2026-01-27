import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { stacksMethods } from '../../../../methods';

export const stacksDeployContractSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The ID of the transaction.
     */
    txid: v.string(),

    /**
     * A Stacks transaction as a hex-encoded string.
     */
    transaction: v.string(),
  }),
  method: stacksMethods.stx_deployContract,
});

export type StacksDeployContractSuccessResponse = v.InferOutput<
  typeof stacksDeployContractSuccessResponseSchema
>;
