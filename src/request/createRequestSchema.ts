import * as v from 'valibot';
import type { GenericSchema } from 'valibot';
import { rpcRequestSchema } from './rpc';

export function createRequestSchema<
  const Params extends GenericSchema,
  const Method extends string,
>({ paramsSchema, method }: { paramsSchema: Params; method: Method }) {
  return v.object({
    ...rpcRequestSchema.entries,
    id: v.string(),
    method: v.literal(method),
    params: paramsSchema,
  });
}
