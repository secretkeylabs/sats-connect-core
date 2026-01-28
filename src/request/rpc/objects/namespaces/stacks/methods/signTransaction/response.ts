import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksSignTransactionSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The signed transaction as a hex-encoded string.
     */
    transaction: v.string(),
  }),
  method: stacksMethods.stx_signTransaction,
});

export type StacksSignTransactionSuccessResponse = v.InferOutput<
  typeof stacksSignTransactionSuccessResponseSchema
>;
