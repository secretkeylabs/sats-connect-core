import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const stacksDeployContractSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksDeployContractResultSchema,
  method: stacksMethods.stx_deployContract,
});

export type StacksDeployContractSuccessResponse = v.InferOutput<
  typeof stacksDeployContractSuccessResponseSchema
>;
