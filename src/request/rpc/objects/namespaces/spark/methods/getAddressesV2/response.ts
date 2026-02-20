import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import { sparkNetworkConfigurationSchema } from 'src/request/rpc/objects/namespaces/wallet/shared/networks';
import * as v from 'valibot';

export const sparkGetAddressesV2ResultSchema = v.object({
  /**
   * The addresses generated for the given purposes.
   */
  addresses: v.array(addressSchema),
  network: sparkNetworkConfigurationSchema,
});

export type SparkGetAddressesV2Result = v.InferOutput<typeof sparkGetAddressesV2ResultSchema>;

export const sparkGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkGetAddressesV2ResultSchema,
  method: sparkMethods.spark_getAddressesV2,
});

export type SparkGetAddressesV2SuccessResponse = v.InferOutput<
  typeof sparkGetAddressesV2SuccessResponseSchema
>;
