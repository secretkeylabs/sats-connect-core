import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksTransferStxParamsSchema = v.object({
  /**
   * Amount of STX tokens to transfer in microstacks as a string. Anything
   * parseable by `BigInt` is acceptable.
   *
   * Example,
   *
   * ```js
   * const amount1 = 1234;
   * const amount2 = 1234n;
   * const amount3 = '1234';
   * ```
   */
  amount: v.union([v.number(), v.string()]),
  /**
   * The recipient's principal.
   */
  recipient: v.string(),
  /**
   * A string representing the memo.
   */
  memo: v.optional(v.string()),
  /**
   * Version of parameter format.
   */
  version: v.optional(v.string()),
  /**
   * The mode of the post conditions.
   */
  postConditionMode: v.optional(v.number()),
  /**
   * A hex-encoded string representing the post conditions.
   *
   * A post condition may be converted to it's hex representation using the
   * `serializePostCondition` helper from the `@stacks/transactions` package,
   *
   * ```js
   * import { serializePostCondition } from '@stacks/transactions';
   *
   * const postCondition = somePostCondition;
   * const hexPostCondition = serializePostCondition(postCondition).toString('hex');
   * ```
   */
  postConditions: v.optional(v.array(v.string())),
  /**
   * The public key to sign the transaction with. The wallet may use any key
   * when not provided.
   */
  pubkey: v.optional(v.string()),
});

export type StacksTransferStxParams = v.InferOutput<typeof stacksTransferStxParamsSchema>;

export const stacksTransferStxRequestSchema = createRequestSchema({
  paramsSchema: stacksTransferStxParamsSchema,
  method: stacksMethods.stx_transferStx,
});

export type StacksTransferStxRequest = v.InferOutput<typeof stacksTransferStxRequestSchema>;
