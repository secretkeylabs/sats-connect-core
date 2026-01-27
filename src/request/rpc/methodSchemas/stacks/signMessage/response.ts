import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { stacksMethods } from '../../../../methods';

export const stacksSignMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The signature of the message.
     */
    signature: v.string(),

    /**
     * The public key used to sign the message.
     */
    publicKey: v.string(),
  }),
  method: stacksMethods.stx_signMessage,
});

export type StacksSignMessageSuccessResponse = v.InferOutput<
  typeof stacksSignMessageSuccessResponseSchema
>;
