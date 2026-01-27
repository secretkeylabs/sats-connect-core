import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { sparkMethods } from '../../../../methods';

export const sparkFlashnetGetJwtSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    /**
     * The JWT token for authenticated requests to the Flashnet API.
     */
    jwt: v.string(),
  }),
  method: sparkMethods.spark_flashnet_getJwt,
});

export type SparkFlashnetGetJwtSuccessResponse = v.InferOutput<
  typeof sparkFlashnetGetJwtSuccessResponseSchema
>;
