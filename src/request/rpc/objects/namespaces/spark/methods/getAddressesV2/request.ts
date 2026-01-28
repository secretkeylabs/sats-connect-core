import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkGetAddressesV2ParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);

export type SparkGetAddressesV2Params = v.InferOutput<typeof sparkGetAddressesV2ParamsSchema>;

export const sparkGetAddressesV2RequestSchema = createRequestSchema({
  paramsSchema: sparkGetAddressesV2ParamsSchema,
  method: sparkMethods.spark_getAddressesV2,
});

export type SparkGetAddressesV2Request = v.InferOutput<typeof sparkGetAddressesV2RequestSchema>;
