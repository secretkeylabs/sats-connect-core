import * as v from 'valibot';

export const specIdSchema = v.union([v.string(), v.number(), v.null()]);
export type SpecId = v.InferOutput<typeof specIdSchema>;

export const specRequestSchema = v.object({
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
  id: v.optional(specIdSchema),
});
export type SpecRequest = v.InferOutput<typeof specRequestSchema>;

export const specSuccessResponseSchema = v.object({
  jsonrpc: v.literal('2.0'),
  result: v.unknown(),
  id: specIdSchema,
});
export type SpecSuccessResponse = v.InferOutput<typeof specSuccessResponseSchema>;

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
export const specSuccessWithExtensionsResponseSchema = v.object({
  ...specSuccessResponseSchema.entries,
  extensions: v.optional(
    v.object({
      warnings: v.array(warningSchema),
    })
  ),
});
export type SpecSuccessWithExtensionsResponse = v.InferOutput<
  typeof specSuccessWithExtensionsResponseSchema
>;

export const specErrorObjectSchema = v.object({
  code: v.number(),
  message: v.string(),
  data: v.optional(v.unknown()),
});
export type SpecErrorObject = v.InferOutput<typeof specErrorObjectSchema>;

export const specErrorResponseSchema = v.object({
  jsonrpc: v.literal('2.0'),
  error: specErrorObjectSchema,
  id: specIdSchema,
});
export type SpecErrorResponse = v.InferOutput<typeof specErrorResponseSchema>;

export const specResponseSchema = v.union([
  specSuccessWithExtensionsResponseSchema,
  specErrorResponseSchema,
]);
export type SpecResponse = v.InferOutput<typeof specResponseSchema>;
