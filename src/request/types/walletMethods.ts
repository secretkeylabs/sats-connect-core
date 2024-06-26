import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';

export const connectMethodName = 'wallet_connect';
export const connectParamsSchema = v.undefined();
export const connectResultSchema = v.literal(true);
export const connectSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(connectMethodName),
    params: connectParamsSchema,
    id: v.string(),
  }).entries,
});
export type Connect = MethodParamsAndResult<
  v.InferOutput<typeof connectParamsSchema>,
  v.InferOutput<typeof connectResultSchema>
>;

export const disconnectMethodName = 'wallet_disconnect';
export const disconnectParamsSchema = v.undefined();
export const disconnectResultSchema = v.literal(true);
export const disconnectSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(disconnectMethodName),
    params: disconnectParamsSchema,
    id: v.string(),
  }).entries,
});
export type Disconnect = MethodParamsAndResult<
  v.InferOutput<typeof disconnectParamsSchema>,
  v.InferOutput<typeof disconnectResultSchema>
>;
