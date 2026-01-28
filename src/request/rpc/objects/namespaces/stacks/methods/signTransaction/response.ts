import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignTransactionResultSchema = v.object({
  /**
   * The signed transaction as a hex-encoded string.
   */
  transaction: v.string(),
});

export type StacksSignTransactionResult = v.InferOutput<typeof stacksSignTransactionResultSchema>;

export const stacksSignTransactionSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksSignTransactionResultSchema,
  method: stacksMethods.stx_signTransaction,
});

export type StacksSignTransactionSuccessResponse = v.InferOutput<
  typeof stacksSignTransactionSuccessResponseSchema
>;
