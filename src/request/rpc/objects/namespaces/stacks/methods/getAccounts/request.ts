import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';

export const stacksGetAccountsRequestSchema = createRequestSchema({
  paramsSchema: v.nullish(v.null()),
  method: stacksMethods.stx_getAccounts,
});

export type StacksGetAccountsRequest = v.InferOutput<typeof stacksGetAccountsRequestSchema>;
