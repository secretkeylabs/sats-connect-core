# How to add a new method

Declare the method in [`methods.ts`](methods.ts).

Include the method in the relevant namespace container.

Ensure the method's full name follows the pattern `<fullMethodName> = <namespace>_<methodName>[version]`. Only include the version for `V2` onwards.

Some existing methods use an abbreviated form of their namespace which is now considered legacy. Going forward, do not abbreviate namespaces.

Add the method definition inside [`namespaces`](./rpc/objects/namespaces)

Add a folder with the `<methodName>` inside the `methods` subdirectory of the appropriate namespace (e.g. `src/request/rpc/objects/namespaces/<namespace>/methods/<methodName>`).

The folder should have three files: `index.ts`, `request.ts` and `response.ts`. File `index.ts` simply exports everything from `request.ts` and `response.ts`.

Within the newly created `request.ts` file, create the request schema using `createRequestSchema` defined in `src/request/createRequestSchema.ts` and define any necessary related schemas. All schemas and types should be exported. At minimum, the file should export:

- `const <fullMethodNameCamelCase>ParamsSchema`
- `type <FullMethodNamePascalCase>Params`
- `const <fullMethodNameCamelCase>RequestSchema`
- `type <FullMethodNamePascalCase>Request`

Create the above types using Valibot's `InferOutput` helper:

```ts
// Example method `foo_getBar`
import * as v from 'valibot';

export const fooGetBarParamsSchema = v.object(/* ... */);
export type FooGetBarParams = v.InferOutput<typeof fooGetBarParamsSchema>;
```

Within the newly created `response.ts` file, create the response schema using `createSuccessResponseSchema` defined in `src/request/createSuccessResponseSchema.ts` and define any necessary related schemas. All schemas and types should be exported. At minimum, the file should export:

- `const <fullMethodNameCamelCase>ResultSchema`
- `type <FullMethodNamePascalCase>Result`
- `const <fullMethodNameCamelCase>SuccessResponseSchema`
- `type <FullMethodNamePascalCase>SuccessResponse`

Create the above types using Valibot's `InferOutput` helper.

Import the request and response schemas into the appropriate namespace index file (e.g. `src/request/rpc/objects/namespaces/<namespace>/index.ts`), add their types to the namespace's `Requests` and `SuccessResponses` type definitions, and register their schemas in the namespace's request and response `v.variant()` schemas. The method name itself should only be declared in `src/request/methods.ts` as described above.

Finally, ensure type checks pass by running the `check-types` script in [`package.json`](../../package.json).
