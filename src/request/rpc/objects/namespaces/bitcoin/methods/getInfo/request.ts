import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';

export const bitcoinGetInfoRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: bitcoinMethods.getInfo,
});

export type BitcoinGetInfoRequest = v.InferOutput<typeof bitcoinGetInfoRequestSchema>;
