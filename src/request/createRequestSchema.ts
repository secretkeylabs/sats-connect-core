import type { GenericSchema } from 'valibot';
import * as v from 'valibot';
import { Method } from './methods';
import { specRequestSchema } from './rpcSpec';

export function createRequestSchema<const Params extends GenericSchema, M extends Method>({
  paramsSchema,
  method,
}: {
  paramsSchema: Params;
  method: M;
}) {
  return v.object({
    ...specRequestSchema.entries,
    id: v.string(),
    method: v.literal(method),
    params: paramsSchema,
  });
}
