import { AddressPurpose } from 'src/addresses';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetAccountsParamsSchema = v.object({
  /**
   * The purposes for which to generate addresses. See
   * {@linkcode AddressPurpose} for available purposes.
   */
  purposes: v.array(v.enum(AddressPurpose)),
  /**
   * A message to be displayed to the user in the request prompt.
   */
  message: v.optional(v.string()),
});

export type BitcoinGetAccountsParams = v.InferOutput<typeof bitcoinGetAccountsParamsSchema>;

export const bitcoinGetAccountsRequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetAccountsParamsSchema,
  method: bitcoinMethods.getAccounts,
});

export type BitcoinGetAccountsRequest = v.InferOutput<typeof bitcoinGetAccountsRequestSchema>;
