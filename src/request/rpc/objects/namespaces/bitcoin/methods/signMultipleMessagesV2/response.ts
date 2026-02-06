import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMultipleMessagesResultSchema } from '../../shared/signMultipleMessages';

export const bitcoinSignMultipleMessagesV2ResultSchema = signMultipleMessagesResultSchema;

export type BitcoinSignMultipleMessagesV2Result = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2ResultSchema
>;

export const bitcoinSignMultipleMessagesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignMultipleMessagesV2ResultSchema,
  method: bitcoinMethods.bitcoin_signMultipleMessagesV2,
});

export type BitcoinSignMultipleMessagesV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2SuccessResponseSchema
>;
