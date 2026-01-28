import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { sparkMethods } from 'src/request/methods';

export const sparkFlashnetGetJwtRequestSchema = createRequestSchema({
  paramsSchema: v.null(),
  method: sparkMethods.spark_flashnet_getJwt,
});

export type SparkFlashnetGetJwtRequest = v.InferOutput<typeof sparkFlashnetGetJwtRequestSchema>;
