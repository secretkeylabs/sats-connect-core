import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMessageParamsSchema } from '../../shared/signMessage';

export const bitcoinSignMessageParamsSchema = signMessageParamsSchema;

export type BitcoinSignMessageParams = v.InferOutput<typeof bitcoinSignMessageParamsSchema>;

export const bitcoinSignMessageRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignMessageParamsSchema,
  method: bitcoinMethods.signMessage,
});

export type BitcoinSignMessageRequest = v.InferOutput<typeof bitcoinSignMessageRequestSchema>;
