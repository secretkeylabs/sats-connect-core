import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';
import { AddressPurpose } from '../../../../../addresses';

export const bitcoinGetAccountsV2RequestSchema = createRequestSchema({
  paramsSchema: v.object({
    /**
     * The purposes for which to generate addresses. See
     * {@linkcode AddressPurpose} for available purposes.
     */
    purposes: v.array(v.enum(AddressPurpose)),
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  }),
  method: bitcoinMethods.bitcoin_getAccountsV2,
});

export type BitcoinGetAccountsV2Request = v.InferOutput<typeof bitcoinGetAccountsV2RequestSchema>;
