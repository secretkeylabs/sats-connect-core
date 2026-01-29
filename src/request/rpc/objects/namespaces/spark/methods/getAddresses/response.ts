import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';
import { walletGetNetworkResultSchema } from '../../../wallet';

export const sparkGetAddressesResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: walletGetNetworkResultSchema,
});

export type SparkGetAddressesResult = v.InferOutput<typeof sparkGetAddressesResultSchema>;

export const sparkGetAddressesSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkGetAddressesResultSchema,
  method: sparkMethods.spark_getAddresses,
});

export type SparkGetAddressesSuccessResponse = v.InferOutput<
  typeof sparkGetAddressesSuccessResponseSchema
>;
