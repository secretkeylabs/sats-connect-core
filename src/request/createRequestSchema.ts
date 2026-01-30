import type { GenericSchema } from 'valibot';
import * as v from 'valibot';
import type { Method } from './methods';
import { specRequestSchema } from './rpcSpec';
import { rpcIdSchema } from './shared';

export function createRequestSchema<const Params extends GenericSchema, M extends Method>({
  paramsSchema,
  method,
}: {
  paramsSchema: Params;
  method: M;
}) {
  return v.object({
    ...specRequestSchema.entries,
    id: rpcIdSchema,
    method: v.literal(method),
    params: paramsSchema,
  });
}
