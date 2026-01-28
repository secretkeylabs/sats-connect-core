import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import { AddressPurpose } from 'src/addresses';

export const bitcoinGetAddressesRequestSchema = createRequestSchema({
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
  method: bitcoinMethods.getAddresses,
});

export type BitcoinGetAddressesRequest = v.InferOutput<typeof bitcoinGetAddressesRequestSchema>;
