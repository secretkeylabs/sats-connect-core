import * as v from 'valibot';
import type { GenericSchema } from 'valibot';
import { rpcSuccessWithExtensionsResponseSchema } from './rpc';
import type { Method } from './methods';

export function createSuccessResponseSchema<
  const M extends Method,
  const ResultSchema extends GenericSchema,
>({ method, resultSchema }: { method: M; resultSchema: ResultSchema }) {
  return v.object({
    ...rpcSuccessWithExtensionsResponseSchema.entries,
    id: v.string(),
    result: resultSchema,

    // This extra property is added to allow discriminating response types.
    //
    // With JSON RPC 2.0, the `id` property is used to match a request with a
    // resposne at a data level, but there's no way to match them at a type
    // level. With this property, Sats Connect can provide better types, and can
    // be stripped before sending the response back to the client.
    '~sats-connect-method': v.literal(method),
  });
}
