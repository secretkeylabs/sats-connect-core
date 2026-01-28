import { AddressPurpose } from 'src/addresses';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetAccountsV2ParamsSchema = v.object({
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

export type BitcoinGetAccountsV2Params = v.InferOutput<typeof bitcoinGetAccountsV2ParamsSchema>;

export const bitcoinGetAccountsV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetAccountsV2ParamsSchema,
  method: bitcoinMethods.bitcoin_getAccountsV2,
});

export type BitcoinGetAccountsV2Request = v.InferOutput<typeof bitcoinGetAccountsV2RequestSchema>;
