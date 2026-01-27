import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { stacksMethods } from '../../../../methods';

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
