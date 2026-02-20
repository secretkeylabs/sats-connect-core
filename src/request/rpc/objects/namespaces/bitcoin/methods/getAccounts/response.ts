import { addressSchema } from 'src/addresses';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import { walletTypeSchema } from 'src/request/rpc/objects/shared';
import * as v from 'valibot';

export const bitcoinGetAccountsResultSchema = v.array(
  v.object({
    ...addressSchema.entries,
    ...v.object({
      walletType: walletTypeSchema,
    }).entries,
  })
);

export type BitcoinGetAccountsResult = v.InferOutput<typeof bitcoinGetAccountsResultSchema>;

export const bitcoinGetAccountsSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetAccountsResultSchema,
  method: bitcoinMethods.getAccounts,
});

export type BitcoinGetAccountsSuccessResponse = v.InferOutput<
  typeof bitcoinGetAccountsSuccessResponseSchema
>;
