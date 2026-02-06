import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMessageResultSchema } from '../../shared/signMessage';

export const bitcoinSignMessageResultSchema = signMessageResultSchema;

export type BitcoinSignMessageResult = v.InferOutput<typeof bitcoinSignMessageResultSchema>;

export const bitcoinSignMessageSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignMessageResultSchema,
  method: bitcoinMethods.signMessage,
});

export type BitcoinSignMessageSuccessResponse = v.InferOutput<
  typeof bitcoinSignMessageSuccessResponseSchema
>;
