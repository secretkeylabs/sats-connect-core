import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksTransferStxResultSchema = v.object({
  /**
   * The ID of the transaction.
   */
  txid: v.string(),

  /**
   * A Stacks transaction as a hex-encoded string.
   */
  transaction: v.string(),
});

export type StacksTransferStxResult = v.InferOutput<typeof stacksTransferStxResultSchema>;

export const stacksTransferStxSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksTransferStxResultSchema,
  method: stacksMethods.stx_transferStx,
});

export type StacksTransferStxSuccessResponse = v.InferOutput<
  typeof stacksTransferStxSuccessResponseSchema
>;
