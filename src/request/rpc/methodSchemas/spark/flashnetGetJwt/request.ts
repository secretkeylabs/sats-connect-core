import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetGetJwtRequestSchema = createRequestSchema({
  paramsSchema: v.null(),
  method: sparkMethods.spark_flashnet_getJwt,
});

export type SparkFlashnetGetJwtRequest = v.InferOutput<typeof sparkFlashnetGetJwtRequestSchema>;
