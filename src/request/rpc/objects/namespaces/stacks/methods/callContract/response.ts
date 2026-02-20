import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksCallContractResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  txid: v.string(),

  /**
   * A Stacks transaction as a hex-encoded string.
   */
  transaction: v.string(),
});

export type StacksCallContractResult = v.InferOutput<typeof stacksCallContractResultSchema>;

export const stacksCallContractSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksCallContractResultSchema,
  method: stacksMethods.stx_callContract,
});

export type StacksCallContractSuccessResponse = v.InferOutput<
  typeof stacksCallContractSuccessResponseSchema
>;
