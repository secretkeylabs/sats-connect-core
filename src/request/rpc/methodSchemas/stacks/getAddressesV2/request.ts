import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { stacksMethods } from '../../../../methods';

export const stacksGetAddressesV2RequestSchema = createRequestSchema({
  paramsSchema: v.nullish(
    v.object({
      /**
       * A message to be displayed to the user in the request prompt.
       */
      message: v.optional(v.string()),
    })
  ),
  method: stacksMethods.stacks_getAddressesV2,
});

export type StacksGetAddressesV2Request = v.InferOutput<typeof stacksGetAddressesV2RequestSchema>;
