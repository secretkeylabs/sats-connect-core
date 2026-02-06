import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { balanceResultSchema } from '../../shared/balanceResultSchema';

export const bitcoinGetBalanceResultSchema = balanceResultSchema;

export type BitcoinGetBalanceResult = v.InferOutput<typeof bitcoinGetBalanceResultSchema>;

export const bitcoinGetBalanceSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetBalanceResultSchema,
  method: bitcoinMethods.getBalance,
});

export type BitcoinGetBalanceSuccessResponse = v.InferOutput<
  typeof bitcoinGetBalanceSuccessResponseSchema
>;
