import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMultipleMessagesResultSchema } from '../../shared/signMultipleMessages';

export const bitcoinSignMultipleMessagesResultSchema = signMultipleMessagesResultSchema;

export type BitcoinSignMultipleMessagesResult = v.InferOutput<
  typeof bitcoinSignMultipleMessagesResultSchema
>;

export const bitcoinSignMultipleMessagesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignMultipleMessagesResultSchema,
  method: bitcoinMethods.signMultipleMessages,
});

export type BitcoinSignMultipleMessagesSuccessResponse = v.InferOutput<
  typeof bitcoinSignMultipleMessagesSuccessResponseSchema
>;
