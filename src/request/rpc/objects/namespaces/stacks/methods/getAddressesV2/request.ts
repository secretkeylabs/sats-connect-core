import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetAddressesV2ParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);

export type StacksGetAddressesV2Params = v.InferOutput<typeof stacksGetAddressesV2ParamsSchema>;

export const stacksGetAddressesV2RequestSchema = createRequestSchema({
  paramsSchema: stacksGetAddressesV2ParamsSchema,
  method: stacksMethods.stacks_getAddressesV2,
});

export type StacksGetAddressesV2Request = v.InferOutput<typeof stacksGetAddressesV2RequestSchema>;
