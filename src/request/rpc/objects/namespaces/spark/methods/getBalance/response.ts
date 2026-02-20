import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

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

export const sparkGetBalanceSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkGetBalanceResultSchema,
  method: sparkMethods.spark_getBalance,
});

export type SparkGetBalanceSuccessResponse = v.InferOutput<
  typeof sparkGetBalanceSuccessResponseSchema
>;
