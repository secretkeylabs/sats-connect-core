import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { stacksMethods } from '../../../../methods';

export const stacksSignStructuredMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * Signature of the message.
     */
    signature: v.string(),

    /**
     * Public key as hex-encoded string.
     */
    publicKey: v.string(),
  }),
  method: stacksMethods.stx_signStructuredMessage,
});

export type StacksSignStructuredMessageSuccessResponse = v.InferOutput<
  typeof stacksSignStructuredMessageSuccessResponseSchema
>;
