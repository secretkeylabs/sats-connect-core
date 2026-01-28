import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';

export const bitcoinGetBalanceV2RequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: bitcoinMethods.bitcoin_getBalanceV2,
});

export type BitcoinGetBalanceV2Request = v.InferOutput<typeof bitcoinGetBalanceV2RequestSchema>;
