import { AddressPurpose } from 'src/addresses';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetAddressesParamsSchema = v.object({
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

export type BitcoinGetAddressesParams = v.InferOutput<typeof bitcoinGetAddressesParamsSchema>;

export const bitcoinGetAddressesRequestSchema = createRequestSchema({
  paramsSchema: bitcoinGetAddressesParamsSchema,
  method: bitcoinMethods.getAddresses,
});

export type BitcoinGetAddressesRequest = v.InferOutput<typeof bitcoinGetAddressesRequestSchema>;
