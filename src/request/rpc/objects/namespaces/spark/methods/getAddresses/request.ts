import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkGetAddressesParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);

export type SparkGetAddressesParams = v.InferOutput<typeof sparkGetAddressesParamsSchema>;

export const sparkGetAddressesRequestSchema = createRequestSchema({
  paramsSchema: sparkGetAddressesParamsSchema,
  method: sparkMethods.spark_getAddresses,
});

export type SparkGetAddressesRequest = v.InferOutput<typeof sparkGetAddressesRequestSchema>;
