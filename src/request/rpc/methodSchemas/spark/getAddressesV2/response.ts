import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { sparkMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';
import { sparkNetworkConfigurationSchema } from '../../../../types/walletMethods/utils';

export const sparkGetAddressesV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The addresses generated for the given purposes.
     */
    addresses: v.array(addressSchema),
    network: sparkNetworkConfigurationSchema,
  }),
  method: sparkMethods.spark_getAddressesV2,
});

export type SparkGetAddressesV2SuccessResponse = v.InferOutput<
  typeof sparkGetAddressesV2SuccessResponseSchema
>;
