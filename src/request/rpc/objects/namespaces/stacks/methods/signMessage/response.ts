import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignMessageResultSchema = v.object({
  /**
   * The signature of the message.
   */
  signature: v.string(),

  /**
   * The public key used to sign the message.
   */
  publicKey: v.string(),
});

export type StacksSignMessageResult = v.InferOutput<typeof stacksSignMessageResultSchema>;

export const stacksSignMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: stacksSignMessageResultSchema,
  method: stacksMethods.stx_signMessage,
});

export type StacksSignMessageSuccessResponse = v.InferOutput<
  typeof stacksSignMessageSuccessResponseSchema
>;
