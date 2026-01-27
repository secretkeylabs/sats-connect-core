import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkGetAddressesRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(
    v.object({
      /**
       * A message to be displayed to the user in the request prompt.
       */
      message: v.optional(v.string()),
    })
  ),
  method: sparkMethods.spark_getAddresses,
});

export type SparkGetAddressesRequest = v.InferOutput<typeof sparkGetAddressesRequestSchema>;
