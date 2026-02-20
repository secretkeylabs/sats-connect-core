import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMessageResultSchema } from '../../shared/signMessage';

export const bitcoinSignMessageV2ResultSchema = signMessageResultSchema;

export type BitcoinSignMessageV2Result = v.InferOutput<typeof bitcoinSignMessageV2ResultSchema>;

export const bitcoinSignMessageV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignMessageV2ResultSchema,
  method: bitcoinMethods.bitcoin_signMessageV2,
});

export type BitcoinSignMessageV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignMessageV2SuccessResponseSchema
>;
