import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetGetJwtResultSchema = v.object({
  /**
   * The JWT token for authenticated requests to the Flashnet API.
   */
  jwt: v.string(),
});

export type SparkFlashnetGetJwtResult = v.InferOutput<typeof sparkFlashnetGetJwtResultSchema>;

export const sparkFlashnetGetJwtSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: sparkFlashnetGetJwtResultSchema,
  method: sparkMethods.spark_flashnet_getJwt,
});

export type SparkFlashnetGetJwtSuccessResponse = v.InferOutput<
  typeof sparkFlashnetGetJwtSuccessResponseSchema
>;
