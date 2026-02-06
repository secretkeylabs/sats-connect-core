import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signPsbtParamsSchema } from '../../shared/signPsbt';

export const bitcoinSignPsbtV2ParamsSchema = signPsbtParamsSchema;

export type BitcoinSignPsbtV2Params = v.InferOutput<typeof bitcoinSignPsbtV2ParamsSchema>;

export const bitcoinSignPsbtV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignPsbtV2ParamsSchema,
  method: bitcoinMethods.bitcoin_signPsbtV2,
});

export type BitcoinSignPsbtV2Request = v.InferOutput<typeof bitcoinSignPsbtV2RequestSchema>;
