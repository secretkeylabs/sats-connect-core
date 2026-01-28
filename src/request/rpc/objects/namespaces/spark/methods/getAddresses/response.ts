import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import { addressSchema } from 'src/addresses';

const getNetworkResultSchema = v.object({
  bitcoin: v.object({
    name: v.string(),
  }),
  stacks: v.object({
    name: v.string(),
  }),
  spark: v.object({
    name: v.string(),
  }),
});

export const sparkGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The addresses generated for the given purposes.
     */
    addresses: v.array(addressSchema),
    network: getNetworkResultSchema,
  }),
  method: sparkMethods.spark_getAddresses,
});

export type SparkGetAddressesSuccessResponse = v.InferOutput<
  typeof sparkGetAddressesSuccessResponseSchema
>;
