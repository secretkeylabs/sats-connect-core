import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetInfoParamsSchema = v.nullish(v.null());

export type BitcoinGetInfoParams = v.InferOutput<typeof bitcoinGetInfoParamsSchema>;

export const bitcoinGetInfoRequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetInfoParamsSchema,
  method: bitcoinMethods.getInfo,
});

export type BitcoinGetInfoRequest = v.InferOutput<typeof bitcoinGetInfoRequestSchema>;
