import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const signPsbtMethodName = 'signPsbt';
export const signPsbtParamsSchema = v.object({
  /**
   * The base64 encoded PSBT to sign.
   */
  psbt: v.string(),
  /**
   * The inputs to sign.
   * The key is the address and the value is an array of indexes of the inputs to sign.
   */
  signInputs: v.optional(v.record(v.string(), v.array(v.number()))),
  /**
   * Whether to broadcast the transaction after signing.
   **/
  broadcast: v.optional(v.boolean()),
});
export type SignPsbtParams = v.InferOutput<typeof signPsbtParamsSchema>;
export const signPsbtResultSchema = v.object({
  /**
   * The base64 encoded PSBT after signing.
   */
  psbt: v.string(),
  /**
   * The transaction id as a hex-encoded string.
   * This is only returned if the transaction was broadcast.
   **/
  txid: v.optional(v.string()),
});
export type SignPsbtResult = v.InferOutput<typeof signPsbtResultSchema>;
export const signPsbtRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(signPsbtMethodName),
    params: signPsbtParamsSchema,
    id: v.string(),
  }).entries,
});
export type SignPsbtRequestMessage = v.InferOutput<typeof signPsbtRequestMessageSchema>;
export type SignPsbt = MethodParamsAndResult<SignPsbtParams, SignPsbtResult>;
