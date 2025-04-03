import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';
import * as v from 'valibot';

export const stxSignMessageMethodName = 'stx_signMessage';

export const stxSignMessageParamsSchema = v.object({
  /**
   * The message to sign.
   */
  message: v.string(),
});
export type StxSignMessageParams = v.InferOutput<typeof stxSignMessageParamsSchema>;

export const stxSignMessageResultSchema = v.object({
  /**
   * The signature of the message.
   */
  signature: v.string(),

  /**
   * The public key used to sign the message.
   */
  publicKey: v.string(),
});
export type StxSignMessageResult = v.InferOutput<typeof stxSignMessageResultSchema>;

export const stxSignMessageRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(stxSignMessageMethodName),
    params: stxSignMessageParamsSchema,
    id: v.string(),
  }).entries,
});
export type StxSignMessageRequestMessage = v.InferOutput<typeof stxSignMessageRequestMessageSchema>;

export type StxSignMessage = MethodParamsAndResult<StxSignMessageParams, StxSignMessageResult>;
