import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';

export const bitcoinGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: bitcoinMethods.getBalance,
});

export type BitcoinGetBalanceRequest = v.InferOutput<typeof bitcoinGetBalanceRequestSchema>;
