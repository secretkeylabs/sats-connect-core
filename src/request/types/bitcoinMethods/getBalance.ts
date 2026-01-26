import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const getBalanceMethodName = 'getBalance';
export const getBalanceParamsSchema = v.nullish(v.null());
export type GetBalanceParams = v.InferOutput<typeof getBalanceParamsSchema>;
export const getBalanceResultSchema = v.object({
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
export type GetBalanceResult = v.InferOutput<typeof getBalanceResultSchema>;
export const getBalanceRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getBalanceMethodName),
    id: v.string(),
  }).entries,
});
export type GetBalanceRequestMessage = v.InferOutput<typeof getBalanceRequestMessageSchema>;
export type GetBalance = MethodParamsAndResult<GetBalanceParams, GetBalanceResult>;

// ---- V2 ----

export const bitcoinGetBalanceV2MethodName = 'bitcoin_getBalanceV2';
export const bitcoinGetBalanceV2ParamsSchema = v.nullish(v.null());
export type BitcoinGetBalanceV2Params = v.InferOutput<typeof bitcoinGetBalanceV2ParamsSchema>;
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
export const bitcoinGetBalanceV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinGetBalanceV2MethodName),
    id: v.string(),
  }).entries,
});
export type BitcoinGetBalanceV2RequestMessage = v.InferOutput<
  typeof bitcoinGetBalanceV2RequestMessageSchema
>;
export type BitcoinGetBalanceV2 = MethodParamsAndResult<
  BitcoinGetBalanceV2Params,
  BitcoinGetBalanceV2Result
>;
