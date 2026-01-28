import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import { AddressPurpose } from 'src/addresses';

export const bitcoinGetAddressesV2RequestSchema = createRequestSchema({
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
  method: bitcoinMethods.bitcoin_getAddressesV2,
});

export type BitcoinGetAddressesV2Request = v.InferOutput<typeof bitcoinGetAddressesV2RequestSchema>;
