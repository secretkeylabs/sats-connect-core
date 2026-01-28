import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksGetAddressesRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(
    v.object({
      /**
       * A message to be displayed to the user in the request prompt.
       */
      message: v.optional(v.string()),
    })
  ),
  method: stacksMethods.stx_getAddresses,
});

export type StacksGetAddressesRequest = v.InferOutput<typeof stacksGetAddressesRequestSchema>;
