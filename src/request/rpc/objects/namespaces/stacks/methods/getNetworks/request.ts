import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetNetworksParamsSchema = v.nullish(v.null());
export type StacksGetNetworksParams = v.InferOutput<typeof stacksGetNetworksParamsSchema>;
export const stacksGetNetworksRequestSchema = createRequestSchema({
  method: stacksMethods.stx_getNetworks,
  paramsSchema: stacksGetNetworksParamsSchema,
});
export type StacksGetNetworksRequest = v.InferOutput<typeof stacksGetNetworksRequestSchema>;
