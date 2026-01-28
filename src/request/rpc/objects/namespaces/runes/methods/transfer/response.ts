import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';
import * as v from 'valibot';

export const runesTransferResultSchema = v.object({
  txid: v.string(),
});

export type RunesTransferResult = v.InferOutput<typeof runesTransferResultSchema>;

export const runesTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: runesTransferResultSchema,
  method: runesMethods.runes_transfer,
});

export type RunesTransferSuccessResponse = v.InferOutput<typeof runesTransferSuccessResponseSchema>;
