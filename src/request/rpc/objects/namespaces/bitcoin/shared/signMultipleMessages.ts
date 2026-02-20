import * as v from 'valibot';
import { signMessageParamsSchema, signMessageResultSchema } from './signMessage';

export const signMultipleMessagesParamsSchema = v.array(signMessageParamsSchema);

export const signMultipleMessagesResultSchema = v.array(
  v.object({
    ...signMessageResultSchema.entries,
    /**
     * The original message which was signed, included to facilitate matching
     * each message with its signature.
     */
    message: v.string(),
  })
);
