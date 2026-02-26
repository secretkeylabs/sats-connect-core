# How to add a new method

Declare the method in [`methods.ts`](methods.ts).

Include the method in the relevant namespace contianer.

Ensure the method's full name follows the pattern `<fullMethodName> = <namespace>_<methoName><version>`

Add the method definition inside [`namespaces`](rpc/objects/namespaces)

Add a folder with the `<methodName>` inside the appropriate namespace

The folder should have three files: `index.ts`, `request.ts` and `response.ts`. File `index.ts` simply exports everything from `request.ts` and `response.ts`.

Within the newly created `request.ts` file, create the request schema using `createRequestSchema` defined in `src/request/createRequestSchema.ts` and define any necessary related schemas. All schemas and types should be exported. At minimum, the file should export:

- `const <fullMethodName>ParamsSchema`
- `type <fullMethodName>Params`
- `const <fullMethodName>RequestSchema`
- `type <fullMethodName>Request`

Create the above types using Valibot's `InferOutput` helper:

```ts
// Example method `foo_getBar`
import * as v from 'valibot';

export const fooGetBarParamsSchema = v.object(/* ... */);
export type FooGetBarParams = v.InferOutput<typeof fooGetBarParamsSchema>;
```

Within the newly created `response.ts` file, create the response schema using `createSuccessResponseSchema` defined in `src/request/createSuccessResponseSchema.ts` and define any necessary related schemas. All schemas and types should be exported. At minimum, the file should export:

- `const <fullMethodName>ResultSchema`
- `type <fullMethodName>Result`
- `const <fullMethodName>SuccessResponseSchema`
- `type <fullMethodName>SuccessResponse`

Create the above types using Valibot's `InferOutput` helper.

Add the request and response schemas to `src/request/methods.ts`.

Finally, ensure type checks pass by running the `check-types` script in [`package.json`](../../package.json).
