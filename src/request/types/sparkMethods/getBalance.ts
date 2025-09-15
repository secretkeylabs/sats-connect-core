import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const sparkGetBalanceMethodName = 'spark_getBalance';

export const sparkGetBalanceParamsSchema = v.nullish(v.null());
export type SparkGetBalanceParams = v.InferOutput<typeof sparkGetBalanceParamsSchema>;

export const sparkGetBalanceResultSchema = v.object({
  /**
   * The Spark Bitcoin address balance in sats in string form.
   */
  balance: v.string(),

  tokenBalances: v.array(
    v.object({
      /* The address balance of the token in string form as it can overflow a js number */
      balance: v.string(),
      tokenMetadata: v.object({
        tokenIdentifier: v.string(),
        tokenName: v.string(),
        tokenTicker: v.string(),
        decimals: v.number(),
        maxSupply: v.string(),
      }),
    })
  ),
});
export type SparkGetBalanceResult = v.InferOutput<typeof sparkGetBalanceResultSchema>;

export const sparkGetBalanceRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkGetBalanceMethodName),
    params: sparkGetBalanceParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkGetBalanceRequestMessage = v.InferOutput<
  typeof sparkGetBalanceRequestMessageSchema
>;

export type SparkGetBalance = MethodParamsAndResult<SparkGetBalanceParams, SparkGetBalanceResult>;
