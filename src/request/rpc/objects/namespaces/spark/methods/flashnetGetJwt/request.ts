import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';
import * as v from 'valibot';

export const sparkFlashnetGetJwtParamsSchema = v.null();

export type SparkFlashnetGetJwtParams = v.InferOutput<typeof sparkFlashnetGetJwtParamsSchema>;

export const sparkFlashnetGetJwtRequestSchema = createRequestSchema({
  paramsSchema: sparkFlashnetGetJwtParamsSchema,
  method: sparkMethods.spark_flashnet_getJwt,
});

export type SparkFlashnetGetJwtRequest = v.InferOutput<typeof sparkFlashnetGetJwtRequestSchema>;
