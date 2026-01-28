import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetBalanceV2ParamsSchema = v.nullish(v.null());

export type BitcoinGetBalanceV2Params = v.InferOutput<typeof bitcoinGetBalanceV2ParamsSchema>;

export const bitcoinGetBalanceV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetBalanceV2ParamsSchema,
  method: bitcoinMethods.bitcoin_getBalanceV2,
});

export type BitcoinGetBalanceV2Request = v.InferOutput<typeof bitcoinGetBalanceV2RequestSchema>;
