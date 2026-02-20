import * as v from 'valibot';
export const balanceResultSchema = v.object({
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
