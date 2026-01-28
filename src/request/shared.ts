import * as v from 'valibot';

export const rpcIdSchema = v.string();

export type RpcId = v.InferOutput<typeof rpcIdSchema>;
