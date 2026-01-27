import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';
import { walletTypeSchema } from '../../../../types/common';

export const bitcoinGetAccountsV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.array(
    v.object({
      ...addressSchema.entries,
      ...v.object({
        walletType: walletTypeSchema,
      }).entries,
    })
  ),
  method: bitcoinMethods.bitcoin_getAccountsV2,
});

export type BitcoinGetAccountsV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetAccountsV2SuccessResponseSchema
>;
