# How to add a new method

Declare the method in [`methods.ts`](methods.ts).

Include the method in the relevant namespace contianer.

Ensure the method's full name follows the pattern `<fullMethodName> = <namespace>_<methoName>[version]`. Only include the version for `V2` onwards.

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

Import the request and response schemas into the appropriate namespace index file (e.g. `src/request/rpc/objects/namespaces/<namespace>/index.ts`), add their types to the namespace's `Requests` and `SuccessResponses` type definitions, and register their schemas in the namespace's request and response `v.variant()` schemas. The method name itself should only be declared in `src/request/methods.ts` as described above.

Finally, ensure type checks pass by running the `check-types` script in [`package.json`](../../package.json).
