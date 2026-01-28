import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';

export const bitcoinGetBalanceV2ResultSchema = v.object({
  /**
   * The confirmed balance of the wallet in sats. Using a string due to chrome
   * messages not supporting bigint
   * (https://issues.chromium.org/issues/40116184).
   */
  confirmed: v.string(),

  /**
   * The unconfirmed balance of the wallet in sats. Using a string due to chrome
   * messages not supporting bigint
   * (https://issues.chromium.org/issues/40116184).
   */
  unconfirmed: v.string(),

  /**
   * The total balance (both confirmed and unconfrimed UTXOs) of the wallet in
   * sats. Using a string due to chrome messages not supporting bigint
   * (https://issues.chromium.org/issues/40116184).
   */
  total: v.string(),
});

export type BitcoinGetBalanceV2Result = v.InferOutput<typeof bitcoinGetBalanceV2ResultSchema>;

export const bitcoinGetBalanceV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinGetBalanceV2ResultSchema,
  method: bitcoinMethods.bitcoin_getBalanceV2,
});

export type BitcoinGetBalanceV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetBalanceV2SuccessResponseSchema
>;
