import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetAccountsResultSchema = v.array(addressSchema);

export type BitcoinGetAccountsResult = v.InferOutput<typeof bitcoinGetAccountsResultSchema>;

export const bitcoinGetAccountsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetAccountsResultSchema,
  method: bitcoinMethods.getAccounts,
});

export type BitcoinGetAccountsSuccessResponse = v.InferOutput<
  typeof bitcoinGetAccountsSuccessResponseSchema
>;
