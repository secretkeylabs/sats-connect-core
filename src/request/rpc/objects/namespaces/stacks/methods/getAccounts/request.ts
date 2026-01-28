import { createRequestSchema } from 'src/request/createRequestSchema';
import { stacksMethods } from 'src/request/methods';
import * as v from 'valibot';

export const stacksGetAccountsParamsSchema = v.nullish(v.null());

export type StacksGetAccountsParams = v.InferOutput<typeof stacksGetAccountsParamsSchema>;

export const stacksGetAccountsRequestSchema = createRequestSchema({
  paramsSchema: stacksGetAccountsParamsSchema,
  method: stacksMethods.stx_getAccounts,
});

export type StacksGetAccountsRequest = v.InferOutput<typeof stacksGetAccountsRequestSchema>;
