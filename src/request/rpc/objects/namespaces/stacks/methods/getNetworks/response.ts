import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetNetworksResultSchema = v.object({
  active: v.string(),
  networks: v.array(
    v.object({
      id: v.string(),
      chainId: v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(0xffffffff)),
      transactionVersion: v.picklist([0, 128]),
    })
  ),
});
export type StacksGetNetworksResult = v.InferOutput<typeof stacksGetNetworksResultSchema>;
export const stacksGetNetworksSuccessResponseSchema = createSuccessResponseSchema({
  method: stacksMethods.stx_getNetworks,
  resultSchema: stacksGetNetworksResultSchema,
});
export type StacksGetNetworksSuccessResponse = v.InferOutput<
  typeof stacksGetNetworksSuccessResponseSchema
>;
