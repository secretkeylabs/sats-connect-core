import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksSignStructuredMessageRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * The domain to be signed.
     */
    domain: v.string(),

    /**
     * Message payload to be signed.
     */
    message: v.string(),

    /**
     * The public key to sign the message with.
     */
    publicKey: v.optional(v.string()),
  }),
  method: stacksMethods.stx_signStructuredMessage,
});

export type StacksSignStructuredMessageRequest = v.InferOutput<
  typeof stacksSignStructuredMessageRequestSchema
>;
