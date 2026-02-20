import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMultipleMessagesParamsSchema } from '../../shared/signMultipleMessages';

export const bitcoinSignMultipleMessagesParamsSchema = signMultipleMessagesParamsSchema;

export type BitcoinSignMultipleMessagesParams = v.InferOutput<
  typeof bitcoinSignMultipleMessagesParamsSchema
>;

export const bitcoinSignMultipleMessagesRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignMultipleMessagesParamsSchema,
  method: bitcoinMethods.signMultipleMessages,
});

export type BitcoinSignMultipleMessagesRequest = v.InferOutput<
  typeof bitcoinSignMultipleMessagesRequestSchema
>;
