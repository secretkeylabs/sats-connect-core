import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMultipleMessagesParamsSchema } from '../../shared/signMultipleMessages';

export const bitcoinSignMultipleMessagesV2ParamsSchema = signMultipleMessagesParamsSchema;

export type BitcoinSignMultipleMessagesV2Params = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2ParamsSchema
>;

export const bitcoinSignMultipleMessagesV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignMultipleMessagesV2ParamsSchema,
  method: bitcoinMethods.bitcoin_signMultipleMessagesV2,
});

export type BitcoinSignMultipleMessagesV2Request = v.InferOutput<
  typeof bitcoinSignMultipleMessagesV2RequestSchema
>;
