import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signMessageParamsSchema } from '../../shared/signMessage';

export const bitcoinSignMessageV2ParamsSchema = signMessageParamsSchema;

export type BitcoinSignMessageV2Params = v.InferOutput<typeof bitcoinSignMessageV2ParamsSchema>;

export const bitcoinSignMessageV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignMessageV2ParamsSchema,
  method: bitcoinMethods.bitcoin_signMessageV2,
});

export type BitcoinSignMessageV2Request = v.InferOutput<typeof bitcoinSignMessageV2RequestSchema>;
