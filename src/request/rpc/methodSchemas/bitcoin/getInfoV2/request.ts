import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';

export const bitcoinGetInfoV2RequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: bitcoinMethods.bitcoin_getInfoV2,
});

export type BitcoinGetInfoV2Request = v.InferOutput<typeof bitcoinGetInfoV2RequestSchema>;
