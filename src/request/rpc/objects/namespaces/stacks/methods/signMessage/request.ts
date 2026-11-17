import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksSignMessageSigners = ['account', 'member'] as const;
export type StacksSignMessageSigner = (typeof stacksSignMessageSigners)[number];

export const stacksSignMessageParamsSchema = v.object({
  /**
   * The message to sign.
   */
  message: v.string(),

  /**
   * Which key signs. Wallets treat a missing value as `account`, so callers written before
   * vaults existed keep compiling and this stays an additive option.
   *
   * A wallet built before this field existed drops it as an unknown key and signs with the
   * account key; the response shape cannot distinguish the two. Callers that require a member
   * signature must therefore verify the returned `publicKey` against the account's member keys
   * and treat anything else as unsupported, rather than trusting that `signer: 'member'` was
   * honoured.
   */
  signer: v.optional(v.picklist(stacksSignMessageSigners)),
});

export type StacksSignMessageParams = v.InferOutput<typeof stacksSignMessageParamsSchema>;

export const stacksSignMessageRequestSchema = createRequestSchema({
  paramsSchema: stacksSignMessageParamsSchema,
  method: stacksMethods.stx_signMessage,
});

export type StacksSignMessageRequest = v.InferOutput<typeof stacksSignMessageRequestSchema>;
