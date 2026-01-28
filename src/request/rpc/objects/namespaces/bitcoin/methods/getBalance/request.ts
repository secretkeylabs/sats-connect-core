import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';

export const bitcoinGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: bitcoinMethods.getBalance,
});

export type BitcoinGetBalanceRequest = v.InferOutput<typeof bitcoinGetBalanceRequestSchema>;
