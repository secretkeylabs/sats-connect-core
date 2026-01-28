import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import { addressSchema } from 'src/addresses';
import { walletTypeSchema } from 'src/request/types/common';

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
