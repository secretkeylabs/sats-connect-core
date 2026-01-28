import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const sparkGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: getNetworkResultSchema,
});

export type SparkGetAddressesResult = v.InferOutput<typeof sparkGetAddressesResultSchema>;

export const sparkGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkGetAddressesResultSchema,
  method: sparkMethods.spark_getAddresses,
});

export type SparkGetAddressesSuccessResponse = v.InferOutput<
  typeof sparkGetAddressesSuccessResponseSchema
>;
