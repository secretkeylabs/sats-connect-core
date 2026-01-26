import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stacksSignMessageMethodName = 'stx_signMessage';

export const stacksSignMessageParamsSchema = v.object({
  /**
   * The message to sign.
   */
  message: v.string(),
});
export type StacksSignMessageParams = v.InferOutput<typeof stacksSignMessageParamsSchema>;

export const stacksSignMessageResultSchema = v.object({
  /**
   * The signature of the message.
   */
  signature: v.string(),

  /**
   * The public key used to sign the message.
   */
  publicKey: v.string(),
});
export type StacksSignMessageResult = v.InferOutput<typeof stacksSignMessageResultSchema>;

export const stacksSignMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stacksSignMessageMethodName),
    params: stacksSignMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type StacksSignMessageRequestMessage = v.InferOutput<
  typeof stacksSignMessageRequestMessageSchema
>;

export type StacksSignMessage = MethodParamsAndResult<
  StacksSignMessageParams,
  StacksSignMessageResult
>;
