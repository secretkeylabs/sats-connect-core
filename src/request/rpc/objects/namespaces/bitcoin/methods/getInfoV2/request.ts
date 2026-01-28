import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetInfoV2ParamsSchema = v.nullish(v.null());

export type BitcoinGetInfoV2Params = v.InferOutput<typeof bitcoinGetInfoV2ParamsSchema>;

export const bitcoinGetInfoV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetInfoV2ParamsSchema,
  method: bitcoinMethods.bitcoin_getInfoV2,
});

export type BitcoinGetInfoV2Request = v.InferOutput<typeof bitcoinGetInfoV2RequestSchema>;
