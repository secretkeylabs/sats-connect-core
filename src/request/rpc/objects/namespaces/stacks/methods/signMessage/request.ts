import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksSignMessageRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * The message to sign.
     */
    message: v.string(),
  }),
  method: stacksMethods.stx_signMessage,
});

export type StacksSignMessageRequest = v.InferOutput<typeof stacksSignMessageRequestSchema>;
