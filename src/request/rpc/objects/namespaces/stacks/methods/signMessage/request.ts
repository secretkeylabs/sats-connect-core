import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignMessageParamsSchema = v.object({
  /**
   * The message to sign.
   */
  message: v.string(),
});

export type StacksSignMessageParams = v.InferOutput<typeof stacksSignMessageParamsSchema>;

export const stacksSignMessageRequestSchema = createRequestSchema({
  paramsSchema: stacksSignMessageParamsSchema,
  method: stacksMethods.stx_signMessage,
});

export type StacksSignMessageRequest = v.InferOutput<typeof stacksSignMessageRequestSchema>;
