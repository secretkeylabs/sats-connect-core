import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { balanceResultSchema } from '../../shared/balanceResultSchema';

export const bitcoinGetBalanceV2ResultSchema = balanceResultSchema;

export type BitcoinGetBalanceV2Result = v.InferOutput<typeof bitcoinGetBalanceV2ResultSchema>;

export const bitcoinGetBalanceV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetBalanceV2ResultSchema,
  method: bitcoinMethods.bitcoin_getBalanceV2,
});

export type BitcoinGetBalanceV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetBalanceV2SuccessResponseSchema
>;
