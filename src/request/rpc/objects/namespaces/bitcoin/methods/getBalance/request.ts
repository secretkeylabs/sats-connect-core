import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetBalanceParamsSchema = v.nullish(v.null());

export type BitcoinGetBalanceParams = v.InferOutput<typeof bitcoinGetBalanceParamsSchema>;

export const bitcoinGetBalanceRequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetBalanceParamsSchema,
  method: bitcoinMethods.getBalance,
});

export type BitcoinGetBalanceRequest = v.InferOutput<typeof bitcoinGetBalanceRequestSchema>;
