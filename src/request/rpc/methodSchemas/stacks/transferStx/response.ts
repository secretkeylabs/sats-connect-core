import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { stacksMethods } from '../../../../methods';

export const stacksTransferStxSuccessResponseSchema = createSuccessResponseSchema({
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
  method: stacksMethods.stx_transferStx,
});

export type StacksTransferStxSuccessResponse = v.InferOutput<
  typeof stacksTransferStxSuccessResponseSchema
>;
