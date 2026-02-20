import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignStructuredMessageResultSchema = v.object({
  /**
   * Signature of the message.
   */
  signature: v.string(),

  /**
   * Public key as hex-encoded string.
   */
  publicKey: v.string(),
});

export type StacksSignStructuredMessageResult = v.InferOutput<
  typeof stacksSignStructuredMessageResultSchema
>;

export const stacksSignStructuredMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksSignStructuredMessageResultSchema,
  method: stacksMethods.stx_signStructuredMessage,
});

export type StacksSignStructuredMessageSuccessResponse = v.InferOutput<
  typeof stacksSignStructuredMessageSuccessResponseSchema
>;
