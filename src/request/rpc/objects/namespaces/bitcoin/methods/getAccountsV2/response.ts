import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { walletTypeSchema } from '../../shared';

export const bitcoinGetAccountsV2ResultSchema = v.array(
  v.object({
    ...addressSchema.entries,
    ...v.object({
      walletType: walletTypeSchema,
    }).entries,
  })
);

export type BitcoinGetAccountsV2Result = v.InferOutput<typeof bitcoinGetAccountsV2ResultSchema>;

export const bitcoinGetAccountsV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetAccountsV2ResultSchema,
  method: bitcoinMethods.bitcoin_getAccountsV2,
});

export type BitcoinGetAccountsV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetAccountsV2SuccessResponseSchema
>;
