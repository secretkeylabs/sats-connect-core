import * as v from 'valibot';

export const rpcIdSchema = v.union([v.string(), v.number(), v.null()]);
export type RpcId = v.InferOutput<typeof rpcIdSchema>;

export const rpcRequestSchema = v.object({
  jsonrpc: v.literal('2.0'),
  method: v.string(),
  params: v.optional(
    v.union([
      v.array(v.unknown()),
      v.looseObject({}),
      // Note: This is to support current incorrect usage of RPC 2.0. Params need
      // to be either an array or an object when provided. Changing this now would
      // be a breaking change, so accepting null values for now. Tracking in
      // https://linear.app/xverseapp/issue/ENG-4538.
      v.null(),
    ])
  ),
  id: v.optional(rpcIdSchema),
});
export type RpcRequest = v.InferOutput<typeof rpcRequestSchema>;

export const rpcSuccessResponseSchema = v.object({
  jsonrpc: v.literal('2.0'),
  result: v.unknown(),
  id: rpcIdSchema,
});
export type RpcSuccessResponse = v.InferOutput<typeof rpcSuccessResponseSchema>;

const warningSchema = v.variant('code', [
  v.object({
    code: v.literal('DEPRECATION_NOTICE'),
    message: v.string(),
    sunsetDate: v.pipe(v.string(), v.isoDate()),
  }),
]);
export type Warning = v.InferOutput<typeof warningSchema>;

/**
 * Extends the standard JSON RPC 2.0 with an additional field as a means of
 * providing clients with extra data, such as deprecation warnings, without
 * altering the main payloads.
 *
 * A JSON-RPC response must either be a result (success) or an error (failure).
 * To provide additional data, conventions must be layered atop these two types.
 * Having an additional property is the least disruptive approach, and is
 * acceptable when clients are known to be able to handle such a structure,
 * which they can since they're all part of Sats Connect.
 */
export const rpcSuccessWithExtensionsResponseSchema = v.object({
  ...rpcSuccessResponseSchema.entries,
  extensions: v.optional(
    v.object({
      warnings: v.array(warningSchema),
    })
  ),
});
export type RpcSuccessWithExtensionsResponse = v.InferOutput<
  typeof rpcSuccessWithExtensionsResponseSchema
>;

export const rpcErrorObject = v.object({
  code: v.number(),
  message: v.string(),
  data: v.optional(v.unknown()),
});
export type RpcErrorObject = v.InferOutput<typeof rpcErrorObject>;

export const rpcErrorResponseSchema = v.object({
  jsonrpc: v.literal('2.0'),
  error: rpcErrorObject,
  id: rpcIdSchema,
});
export type RpcErrorResponse = v.InferOutput<typeof rpcErrorResponseSchema>;
