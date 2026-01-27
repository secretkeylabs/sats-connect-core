import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';

export const bitcoinGetInfoRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: bitcoinMethods.getInfo,
});

export type BitcoinGetInfoRequest = v.InferOutput<typeof bitcoinGetInfoRequestSchema>;
