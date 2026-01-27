import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkGetAddressesV2RequestSchema = createRequestSchema({
  paramsSchema: v.nullish(
    v.object({
      /**
       * A message to be displayed to the user in the request prompt.
       */
      message: v.optional(v.string()),
    })
  ),
  method: sparkMethods.spark_getAddressesV2,
});

export type SparkGetAddressesV2Request = v.InferOutput<typeof sparkGetAddressesV2RequestSchema>;
