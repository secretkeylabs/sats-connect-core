import * as v from 'valibot';
import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { runesMethods } from 'src/request/methods';

export const runesTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    txid: v.string(),
  }),
  method: runesMethods.runes_transfer,
});

export type RunesTransferSuccessResponse = v.InferOutput<typeof runesTransferSuccessResponseSchema>;
