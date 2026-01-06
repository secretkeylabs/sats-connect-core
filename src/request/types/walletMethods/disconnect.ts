import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export const disconnectMethodName = 'wallet_disconnect';
export const disconnectParamsSchema = v.nullish(v.null());
export type DisconnectParams = v.InferOutput<typeof disconnectParamsSchema>;
export const disconnectResultSchema = v.nullish(v.null());
export type DisconnectResult = v.InferOutput<typeof disconnectResultSchema>;
export const disconnectRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(disconnectMethodName),
    params: disconnectParamsSchema,
    id: v.string(),
  }).entries,
});
export type DisconnectRequestMessage = v.InferOutput<typeof disconnectRequestMessageSchema>;
export type Disconnect = MethodParamsAndResult<DisconnectParams, DisconnectResult>;
