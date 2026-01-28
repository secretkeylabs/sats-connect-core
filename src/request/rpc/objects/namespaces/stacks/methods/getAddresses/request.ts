import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetAddressesParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);

export type StacksGetAddressesParams = v.InferOutput<typeof stacksGetAddressesParamsSchema>;

export const stacksGetAddressesRequestSchema = createRequestSchema({
  paramsSchema: stacksGetAddressesParamsSchema,
  method: stacksMethods.stx_getAddresses,
});

export type StacksGetAddressesRequest = v.InferOutput<typeof stacksGetAddressesRequestSchema>;
