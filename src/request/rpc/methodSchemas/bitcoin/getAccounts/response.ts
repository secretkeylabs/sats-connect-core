import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';
import { addressSchema } from '../../../../../addresses';
import { walletTypeSchema } from '../../../../types/common';

export const bitcoinGetAccountsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.array(
    v.object({
      ...addressSchema.entries,
      ...v.object({
        walletType: walletTypeSchema,
      }).entries,
    })
  ),
  method: bitcoinMethods.getAccounts,
});

export type BitcoinGetAccountsSuccessResponse = v.InferOutput<
  typeof bitcoinGetAccountsSuccessResponseSchema
>;
