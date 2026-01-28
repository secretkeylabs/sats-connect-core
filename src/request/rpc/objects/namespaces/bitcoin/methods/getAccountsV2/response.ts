import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import { addressSchema } from 'src/addresses';
import { walletTypeSchema } from 'src/request/types/common';

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
