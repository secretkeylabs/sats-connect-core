import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../../types';

export const sparkFlashnetGetJwtMethodName = 'spark_flashnet_getJwt';

export const sparkFlashnetGetJwtParamsSchema = v.nullish(
  v.object({
    /**
     * A message to be displayed to the user in the request prompt.
     */
    message: v.optional(v.string()),
  })
);
export type SparkFlashnetGetJwtParams = v.InferOutput<typeof sparkFlashnetGetJwtParamsSchema>;

export const sparkFlashnetGetJwtResultSchema = v.object({
  /**
   * The JWT token for authenticated requests to the Flashnet API.
   */
  jwt: v.string(),
});
export type SparkFlashnetGetJwtResult = v.InferOutput<typeof sparkFlashnetGetJwtResultSchema>;

export const sparkFlashnetGetJwtRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sparkFlashnetGetJwtMethodName),
    params: sparkFlashnetGetJwtParamsSchema,
    id: v.string(),
  }).entries,
});
export type SparkFlashnetGetJwtRequestMessage = v.InferOutput<
  typeof sparkFlashnetGetJwtRequestMessageSchema
>;

export type SparkFlashnetGetJwt = MethodParamsAndResult<
  SparkFlashnetGetJwtParams,
  SparkFlashnetGetJwtResult
>;
